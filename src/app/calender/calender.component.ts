import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var googleEvent:any;
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements AfterViewInit {
  @ViewChild('date') date!: ElementRef;
  constructor() { }
  userInfo: FormGroup = new FormGroup({
    email: new FormControl(''),
    dob: new FormControl('')
  })
  ngAfterViewInit(): void {

  }
  scheduleMeeting() {

    let appointmentTime = new Date(this.userInfo.value.dob);
    // Convert the date to the desired format with a custom offset (e.g., -07:00)
    const startTime = appointmentTime.toISOString().slice(0, 18) + '-07:00';
    const endTime = this.getEndTime(appointmentTime);
    const eventDetails = {
      email: this.userInfo.value.email,
      startTime: startTime,
      endTime: endTime,
    };
    console.info(eventDetails);
    //this.generateICSFile()
    googleEvent(eventDetails);
  }
  getEndTime(appointmentTime: Date) {
    // Add one hour to the date
    appointmentTime.setHours(appointmentTime.getHours() + 1);
    const endTime = appointmentTime.toISOString().slice(0, 18) + '-07:00';
    return endTime;
  }
}
