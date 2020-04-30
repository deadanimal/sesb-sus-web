import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
} from "@angular/core";

import * as L from "leaflet";
import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  today = new Date();
  todaydate: string;

  momentdate;

  // leaflet
  leafletOptions = {
    layers: [
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }),
    ],
    zoom: 9,
    center: L.latLng(3.0738, 101.5183),
  };
  public markers = [];

  constructor(public zone: NgZone) {}

  ngOnInit() {
    this.todaydate = this.yearMonthDate();

    this.addMarker();

    setInterval(() => {
      this.momentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  }

  yearMonthDate() {
    let year = this.today.getFullYear();

    let month = this.today.getMonth();
    let monthstring = month < 10 ? "0" + month : month.toString();

    let date = this.today.getDate();
    let datestring = date < 10 ? "0" + date : date.toString();

    return (
      this.day[this.today.getDay()] +
      " " +
      year +
      "-" +
      monthstring +
      "-" +
      datestring
    );
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        quarter: "Jan - Mac 2019",
        total: 23.41,
      },
      {
        quarter: "Apr - Jun 2019",
        total: 22.31,
      },
      {
        quarter: "Jul - Sep 2019",
        total: 20.19,
      },
      {
        quarter: "Oct - Dec 2019",
        total: 21.56,
      },
      {
        quarter: "Jan - Mac 2020",
        total: 22.15,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "quarter";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "total";
    series.dataFields.categoryX = "quarter";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
  }

  initChartTwo() {
    let chart = am4core.create("chartdivtwo", am4charts.XYChart);

    // Create daily series and related axes
    let dateAxis1 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis1.renderer.grid.template.location = 0;
    dateAxis1.renderer.minGridDistance = 40;

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    series1.data = generateDailyData();
    series1.xAxis = dateAxis1;
    series1.yAxis = valueAxis1;
    series1.tooltipText = "{dateX}: [bold]{valueY}[/]";

    // Create hourly series and related axes
    let dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis2.renderer.minGridDistance = 40;
    dateAxis2.renderer.labels.template.disabled = true;
    dateAxis2.renderer.grid.template.disabled = true;
    dateAxis2.renderer.tooltip.disabled = true;

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.disabled = true;
    valueAxis2.renderer.labels.template.disabled = true;
    valueAxis2.renderer.tooltip.disabled = true;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value";
    series2.dataFields.dateX = "date";
    series2.data = generateHourlyData();
    series2.xAxis = dateAxis2;
    series2.yAxis = valueAxis2;
    series2.strokeWidth = 3;
    series2.tooltipText =
      "{dateX.formatDate('yyyy-MM-dd hh:00')}: [bold]{valueY}[/]";

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    function generateDailyData() {
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 5);
      firstDate.setHours(0, 0, 0, 0);
      let data = [];
      for (var i = 0; i < 5; i++) {
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        data.push({
          date: newDate,
          value: Math.round(Math.random() * 12) + 1,
        });
      }
      return data;
    }

    function generateHourlyData() {
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 10);
      let data = [];
      for (var i = 0; i < 10 * 24; i++) {
        let newDate = new Date(firstDate);
        newDate.setHours(newDate.getHours() + i);
        let value = 0;
        if (i == 0) {
          value = Math.round(Math.random() * 10) + 1;
        } else {
          value =
            Math.round(
              (data[data.length - 1].value / 100) *
                (90 + Math.round(Math.random() * 20)) *
                100
            ) / 100;
        }
        data.push({
          date: newDate,
          value: value,
        });
      }
      return data;
    }
  }

  initChartThree() {
    let chart = am4core.create("chartdivthree", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        district: "K. Kinabalu",
        kwh: 11678,
      },
      {
        district: "Tambunan",
        kwh: 10450,
      },
      {
        district: "Sandakan",
        kwh: 10198,
      },
      {
        district: "Labuan",
        kwh: 9598,
      },
      {
        district: "Tawau",
        kwh: 8657,
      },
      {
        district: "Putatan",
        kwh: 8509,
      },
      {
        district: "Penampang",
        kwh: 8401,
      },
      {
        district: "Papar",
        kwh: 7867,
      },
      {
        district: "Lahad Datu",
        kwh: 7433,
      },
      {
        district: "Kunak",
        kwh: 6500,
      },
      {
        district: "Kota Belud",
        kwh: 6398,
      },
      {
        district: "Kota Merudu",
        kwh: 6009,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "district";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "kwh";
    series.dataFields.categoryX = "district";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
  }

  initChartFour() {
    let chart = am4core.create("chartdivfour", am4charts.XYChart);

    let data = [];
    let price1 = 1000,
      price2 = 1200;
    let quantity = 30000;
    for (var i = 0; i < 360; i++) {
      price1 += Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 100
      );
      data.push({ date1: new Date(2015, 0, i), price1: price1 });
    }
    for (var i = 0; i < 360; i++) {
      price2 += Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 100
      );
      data.push({ date2: new Date(2017, 0, i), price2: price2 });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.fill = am4core.color("#e59165");

    let dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.labels.template.fill = am4core.color("#e59165");

    valueAxis.renderer.minWidth = 60;

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");
    valueAxis2.renderer.minWidth = 60;
    valueAxis2.syncWithAxis = valueAxis;

    let series = chart.series.push(new am4charts.LineSeries());
    series.name = "2019";
    series.dataFields.dateX = "date1";
    series.dataFields.valueY = "price1";
    series.tooltipText = "{valueY.value}";
    series.fill = am4core.color("#e59165");
    series.stroke = am4core.color("#e59165");
    //series.strokeWidth = 3;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "2018";
    series2.dataFields.dateX = "date2";
    series2.dataFields.valueY = "price2";
    series2.yAxis = valueAxis2;
    series2.xAxis = dateAxis2;
    series2.tooltipText = "{valueY.value}";
    series2.fill = am4core.color("#dfcc64");
    series2.stroke = am4core.color("#dfcc64");
    //series2.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis2;

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.legend = new am4charts.Legend();
    chart.legend.parent = chart.plotContainer;
    chart.legend.zIndex = 100;

    valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
    dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
    dateAxis.renderer.grid.template.strokeOpacity = 0.07;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initChartOne();
      this.initChartTwo();
      this.initChartThree();
      this.initChartFour();
    });
  }

  addMarker() {
    let marker1 = L.marker([2.940298, 101.47522], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-green.svg",
      }),
    });
    this.markers.push(marker1);
    let marker2 = L.marker([3.196735, 101.431274], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-red.svg",
      }),
    });
    this.markers.push(marker2);
    let marker3 = L.marker([3.126804, 101.862488], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-yellow.svg",
      }),
    });
    this.markers.push(marker3);
  }
}
