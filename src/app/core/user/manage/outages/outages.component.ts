import { Component, OnInit } from "@angular/core";

import * as L from "leaflet";

@Component({
  selector: "app-outages",
  templateUrl: "./outages.component.html",
  styleUrls: ["./outages.component.scss"],
})
export class OutagesComponent implements OnInit {
  // leaflet
  leafletOptions = {
    layers: [
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }),
    ],
    zoom: 8,
    center: L.latLng(5.427246, 117.101762),
  };
  circles = [
    {
      lat: 5.875495,
      long: 118.027355,
    },
    {
      lat: 5.038858,
      long: 118.33222,
    },
    {
      lat: 4.31618,
      long: 117.898255,
    },
    {
      lat: 5.356151,
      long: 116.173401,
    },
    {
      lat: 6.356141,
      long: 116.445307,
    },
    {
      lat: 6.552641,
      long: 117.263789,
    },
  ];

  constructor() {}

  ngOnInit() {}

  mapReady(map) {
    for (let i = 0; i < this.circles.length; i++) {
      let circle1 = L.circle([this.circles[i].lat, this.circles[i].long], { 
        radius: 10000,
        color: 'red'
      });
      circle1.addTo(map);
    }
  }
}
