import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  @Input() isExpend:boolean = false;
  @Output() toggle:EventEmitter<boolean>  = new EventEmitter<boolean>;


  toggleSidebar = () =>  this.toggle.emit(!this.isExpend);



}
