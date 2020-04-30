import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.scss"],
})
export class BillingComponent implements OnInit {
  billings = [
    {
      id: 1,
      full_name: "Mikael Brace",
      account_no: "593637349175",
      payment_date: "2020-02-24",
      amount: 276.65,
    },
    {
      id: 2,
      full_name: "Derwin Conrart",
      account_no: "375592239489",
      payment_date: "2019-12-07",
      amount: 275.93,
    },
    {
      id: 3,
      full_name: "Matias Duxbarry",
      account_no: "484727881193",
      payment_date: "2019-09-24",
      amount: 256.22,
    },
    {
      id: 4,
      full_name: "Freedman Owtram",
      account_no: "690256081823",
      payment_date: "2020-04-02",
      amount: 230.07,
    },
    {
      id: 5,
      full_name: "Giorgio Mourbey",
      account_no: "741624432301",
      payment_date: "2019-11-13",
      amount: 247.67,
    },
    {
      id: 6,
      full_name: "Anderea Pionter",
      account_no: "576241237629",
      payment_date: "2020-01-04",
      amount: 35.45,
    },
    {
      id: 7,
      full_name: "Stevie Corsor",
      account_no: "878413918020",
      payment_date: "2019-12-24",
      amount: 40.38,
    },
    {
      id: 8,
      full_name: "Janaye Abelwhite",
      account_no: "205881833669",
      payment_date: "2019-07-20",
      amount: 92.07,
    },
    {
      id: 9,
      full_name: "Linoel Dobbin",
      account_no: "327603502417",
      payment_date: "2019-12-14",
      amount: 276.32,
    },
    {
      id: 10,
      full_name: "Juieta Allwood",
      account_no: "499015136182",
      payment_date: "2019-09-20",
      amount: 222.71,
    },
    {
      id: 11,
      full_name: "Noell Conring",
      account_no: "822054394819",
      payment_date: "2019-06-21",
      amount: 76.28,
    },
    {
      id: 12,
      full_name: "Donielle Albury",
      account_no: "195380012972",
      payment_date: "2019-08-05",
      amount: 186.29,
    },
    {
      id: 13,
      full_name: "Miquela Deaconson",
      account_no: "485669478917",
      payment_date: "2019-10-05",
      amount: 254.76,
    },
    {
      id: 14,
      full_name: "Ennis Cammell",
      account_no: "806317050064",
      payment_date: "2020-04-22",
      amount: 259.18,
    },
    {
      id: 15,
      full_name: "Noel Rookwell",
      account_no: "311600735209",
      payment_date: "2019-05-05",
      amount: 73.14,
    },
    {
      id: 16,
      full_name: "Asa Cereceres",
      account_no: "118409310553",
      payment_date: "2020-04-13",
      amount: 143.89,
    },
    {
      id: 17,
      full_name: "Rudolf Langley",
      account_no: "493224440231",
      payment_date: "2019-12-25",
      amount: 228.32,
    },
    {
      id: 18,
      full_name: "Olive Orgee",
      account_no: "159383808466",
      payment_date: "2019-08-02",
      amount: 257.38,
    },
    {
      id: 19,
      full_name: "Tally Brydson",
      account_no: "365361930835",
      payment_date: "2020-03-17",
      amount: 201.59,
    },
    {
      id: 20,
      full_name: "Alfonse De Ruggiero",
      account_no: "358553509337",
      payment_date: "2019-10-04",
      amount: 102.07,
    },
  ];
  billing = {
    id: 0,
    full_name: "",
    account_no: "",
    payment_date: "",
    amount: 0,
  };
  closeResult: string;

  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  openModal(content, billing) {
    this.billing = billing;
    this.modalService
      .open(content, {
        windowClass: "modal-mini",
        centered: true,
        size: "md"
      })
      .result.then(
        (result) => {
          this.closeResult = "Closed with: $result";
        },
        (reason) => {
          this.closeResult = "Dismissed $this.getDismissReason(reason)";
        }
      );
  }
}
