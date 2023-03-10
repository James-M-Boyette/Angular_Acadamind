import { Component } from '@angular/core';

@Component({
  selector: 'app-server-assignment-final',
  templateUrl: './server-assignment-final.component.html',
  styleUrls: ['./server-assignment-final.component.css'],
  styles: [`
    .blue {
      background: dodgerblue;
      color: white
    }
  `]
})
export class ServerAssignmentFinalComponent {
  showSecret:boolean = false
  clickEvents = []


  onDisplaySecret(event:any){
    this.showSecret = !this.showSecret
    // let eventTarget = event.target
    console.log(`The Event:`, event.timeStamp);
    // this.clickEvents.push(event.timeStamp)
    this.clickEvents.push(new Date())
  }
  
}
