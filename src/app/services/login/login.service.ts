import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

const httpOtions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
  }),
};

@Injectable({
  providedIn: "root",
})
export class LoginService {
  url: any = "http://localhost:4200/login";
  errorSubject: any = new BehaviorSubject<any>(null);
  errorMessage: any = this.errorSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): any {
    this.http
      .post(this.url, { username, password }, httpOtions)
      .toPromise()
      .then((res: any) => {
        if (res && res.jwt) {
          sessionStorage.setItem("jwt", res.jwt);
          this.errorSubject.next(null);
          this.router.navigateByUrl("dashboard");
        } else if (res.Message) {
          this.errorSubject.next(res.Message);
        }
      });
  }
}
