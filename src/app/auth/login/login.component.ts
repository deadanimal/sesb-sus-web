import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import swal from "sweetalert2";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  username: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  loginSwal() {

    if (this.username == "admin" && this.password == "admin") {
      this.router.navigate(['/admin/dashboard']);
    } else if (this.username == "user" && this.password == "user") {
      this.router.navigate(['/user/dashboard']);
    } else {
      alert("Sorry. Please try again.");
    }
    /* swal
      .fire({
        title: "User Type",
        text: "Please choose type of user to login.",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-pipeline",
        confirmButtonText: "Administrator",
        cancelButtonClass: "btn btn-pipeline",
        cancelButtonText: "Subscriber",
      })
      .then((result) => {
        console.log(result.dismiss);
        if (result.value) {
          this.router.navigate(['/admin/dashboard']);
        }
        else if (result.dismiss.toString() === "cancel") {
          this.router.navigate(['/subscriber/home']);
        }
      }); */
  }
}
