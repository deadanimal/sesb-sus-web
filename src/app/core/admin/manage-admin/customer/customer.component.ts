import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  customers = [
    {
      id: 1,
      full_name: "Quint Matusevich",
      account_type: "Company",
      account_no: "894431040184",
    },
    {
      id: 2,
      full_name: "Jeramie Mac Giolla Pheadair",
      account_type: "Company",
      account_no: "152286164025",
    },
    {
      id: 3,
      full_name: "Inge Beeswing",
      account_type: "Individual",
      account_no: "960616633632",
    },
    {
      id: 4,
      full_name: "Emalia Tiltman",
      account_type: "Company",
      account_no: "712974740800",
    },
    {
      id: 5,
      full_name: "Wally Raylton",
      account_type: "Company",
      account_no: "258873667524",
    },
    {
      id: 6,
      full_name: "Robyn Rendle",
      account_type: "Individual",
      account_no: "770860056730",
    },
    {
      id: 7,
      full_name: "Winnah Coggin",
      account_type: "Company",
      account_no: "933922248853",
    },
    {
      id: 8,
      full_name: "Lissi Mitchelmore",
      account_type: "Individual",
      account_no: "375615376230",
    },
    {
      id: 9,
      full_name: "Augusto Proby",
      account_type: "Individual",
      account_no: "196795715626",
    },
    {
      id: 10,
      full_name: "Zed Bellham",
      account_type: "Individual",
      account_no: "774048295253",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
