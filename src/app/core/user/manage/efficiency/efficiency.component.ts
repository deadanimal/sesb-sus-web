import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-efficiency',
  templateUrl: './efficiency.component.html',
  styleUrls: ['./efficiency.component.scss']
})
export class EfficiencyComponent implements OnInit {
  showTips: boolean = false;
  showLabel: boolean = false;
  showUsageCost: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showImage(name) {
    if (name == 'tips') {
      this.showTips = true;
      this.showLabel = false;
      this.showUsageCost = false;
    }
    else if (name == 'label') {
      this.showTips = false;
      this.showLabel = true;
      this.showUsageCost = false;
    }
    else if (name == 'usageCost') {
      this.showTips = false;
      this.showLabel = false;
      this.showUsageCost = true;
    }
  }

}
