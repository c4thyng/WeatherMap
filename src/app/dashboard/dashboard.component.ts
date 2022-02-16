import { Component } from '@angular/core';
import { GlobalHandlingService } from '../core/services/global-handling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public globalHandlingService : GlobalHandlingService) { }

}
