import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-assignment',
  templateUrl: './alert-assignment.component.html',
  styleUrls: ['./alert-assignment.component.css']
})
export class AlertAssignmentComponent {
  userName = 'Your_User_Name_Goes_Here'

  onResetUserName() {
    this.userName = ''
  }
}
