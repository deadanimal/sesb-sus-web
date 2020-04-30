import { Component, OnInit, NgZone } from "@angular/core";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  constructor(public zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initChartOne();
    });
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "K. Kinabalu",
        visits: 23725,
      },
      {
        country: "Tambunan",
        visits: 1882,
      },
      {
        country: "Sandakan",
        visits: 1809,
      },
      {
        country: "Labuan",
        visits: 1322,
      },
      {
        country: "Tawau",
        visits: 1122,
      },
      {
        country: "Putatan",
        visits: 1114,
      },
      {
        country: "Penampang",
        visits: 984,
      },
      {
        country: "Papar",
        visits: 711,
      },
      {
        country: "Lahad Datu",
        visits: 665,
      },
      {
        country: "Kunak",
        visits: 580,
      },
      {
        country: "Kota Belud",
        visits: 443,
      },
      {
        country: "Kota Merudu",
        visits: 441,
      },
      {
        country: "Kudat",
        visits: 430,
      },
      {
        country: "Kuala Penyu",
        visits: 422,
      },
      {
        country: "Beluran",
        visits: 414,
      },
      {
        country: "Beaufort",
        visits: 399,
      },
      {
        country: "Semporna",
        visits: 378,
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 24000;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 2100;
    axisBreak.endValue = 22900;
    //axisBreak.breakSize = 0.005;

    // fixed axis break
    let d =
      (axisBreak.endValue - axisBreak.startValue) /
      (valueAxis.max - valueAxis.min);
    axisBreak.breakSize = (0.05 * (1 - d)) / d; // 0.05 means that the break will take 5% of the total value axis height

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    /*
// this is exactly the same, but with events
axisBreak.events.on("over", function() {
  axisBreak.animate(
    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
    1500,
    am4core.ease.sinOut
  );
});
axisBreak.events.on("out", function() {
  axisBreak.animate(
    [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
    1000,
    am4core.ease.quadOut
  );
});*/

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }
}
