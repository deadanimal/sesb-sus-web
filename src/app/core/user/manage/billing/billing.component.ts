import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  accountNo: string = "";
  closeResult: string;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    console.log(content);
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
