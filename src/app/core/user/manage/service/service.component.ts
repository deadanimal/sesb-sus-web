import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceType: string = "";
  accountType: string = "";

  constructor() { }

  ngOnInit() {
  }

}
