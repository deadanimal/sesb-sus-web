import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-comparison",
  templateUrl: "./comparison.component.html",
  styleUrls: ["./comparison.component.scss"],
})
export class ComparisonComponent implements OnInit {
  showChart: boolean = false;

  constructor() {}

  ngOnInit() {}

  resetComparison() {
    this.showChart = false;
  }

  findComparison() {
    this.showChart = true;
    setTimeout(() => {
      this.initChartOne();
    }, 1000);
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        home: "Efficient similar homes",
        total: 262,
        color: chart.colors.next(),
      },
      {
        home: "Similar homes",
        total: 494,
        color: chart.colors.next(),
      },
      {
        home: "Your Home",
        total: 587,
        color: chart.colors.next(),
      }
    ];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "home";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "total";
    series.dataFields.categoryY = "home";
    series.name = "Total";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX} kWh";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
  }
}
