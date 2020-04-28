import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-usage",
  templateUrl: "./usage.component.html",
  styleUrls: ["./usage.component.scss"],
})
export class UsageComponent implements OnInit {
  accountNo: string = "";
  fromDate: string = "";
  toDate: string = "";
  showChart: boolean = false;

  constructor() {}

  ngOnInit() {}

  clickAnalyze() {
    if (this.accountNo && this.fromDate && this.toDate) {
      this.showChart = true;
      setTimeout(() => {
        this.initChartOne();
      }, 1000);
    } else {
      alert("Please input account no OR from date OR to date to proceed.");
    }
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        type: "Cold Appliances",
        watts: 4025,
      },
      {
        type: "Lighting",
        watts: 1882,
      },
      {
        type: "Consumer Electronics",
        watts: 1809,
      },
      {
        type: "Cooking",
        watts: 1322,
      },
      {
        type: "Wet Appliances",
        watts: 1122,
      },
      {
        type: "Water Heating",
        watts: 1114,
      },
      {
        type: "Computing",
        watts: 984,
      },
      {
        type: "Other",
        watts: 711,
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "type";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Watts";
    valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "watts";
    series.dataFields.categoryX = "type";
    series.name = "Watts";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
  }
}
