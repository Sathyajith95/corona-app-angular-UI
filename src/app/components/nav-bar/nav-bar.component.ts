import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }
  onMail() {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sathyajith95@gmail.com");
  }

  onLinkedIn() {
    window.open("http://www.linkedin.com/in/sathyajith-r");
  }
  

  // someMethod() {
  //   this.trigger.openMenu();
  // }
}
