import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      color: white
    }
  `]
})
export class ServerComponent {
  serverId:number = 10;
  // serverStatus:string = "Offline"
  serverStatus:boolean = true
  availableServers = []

  onClick() {
    console.log(`serverStatus: ${this.serverStatus}`);
    this.getServerStatus()
  }

  getServerStatus(){
    this.serverStatus = !this.serverStatus;
  }
  
  serverCreationStatus = '';
  dontAllowNewServer = true;
  constructor() {
    this.enableNewServerAfterDelay();
  }

  ngOnInit(): void {
  }

  enableNewServerAfterDelay() {
    setTimeout(() => {
      this.dontAllowNewServer = false;
    }, 5000);
  }

  onCreateServer() {
    console.log('Server was created!');
    this.availableServers.push(this.serverName1)
    this.serverCreationStatus = `Server "${this.serverName1}" was created!`
  }
  // Note: naming this function with the "on" prefix is a good way to indicate that it will (only) be triggered by a user input. Though Angular syntax allows us to drop the "on" from onclick, it's still a good idea to put/keep that informative syntax somewhere in the business logic chain

  // Explorations of TypeScript:
  serverName1: string = ''; // This var can only be a string
  serverName2: string | HTMLInputElement = ''; // This var, using a "union" can be either a string, or an HTMLInputElement
  serverName3: string | HTMLInputElement = '';
  onUpdateServerName(event:any) {
    this.serverName1 = (<HTMLInputElement>event.target).value
    // This first version uses "angle bracket syntax" to tell TS that the event.target is an HTMLInputElement, and then read its value (which hopefully / definitely is a string)
    this.serverName2 = <HTMLInputElement>event.target.value
    // This second version casts the entire user input event as an HTMLInputElement ... which is less accurate, as a result, bc we really only want to store strings for later use (in this case)
    this.serverName3 = event.target.value as HTMLInputElement;
    // This third version allows us to avoid conflicts with JSX syntax (which also uses angle "<>" brackets)
  }

  getServerStatusColor(){
    return this.serverCreationStatus ? 'green' : 'red'
  }
}
