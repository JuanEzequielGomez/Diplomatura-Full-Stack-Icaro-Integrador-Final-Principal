import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  registerUser(user: {username:string; firstName: string; lastName: string; password: string; country: string; city: string }): Observable<any> {
    return this.http.post("https://icaro-api-v1.herokuapp.com/api/users", user);
  }

  Acceder(user:{ username: string; password: string;}): Observable<any> {
    return this.http.post("https://icaro-api-v1.herokuapp.com/api/login", user);
}

  postMessage(mensaje: { receiverId:string, text:string}): Observable<any>{
    return this.http.post("https://icaro-api-v1.herokuapp.com/api/users/username/messages", mensaje)
}


setToken(token: any) {
  this.cookies.set("token", token);
}
getToken() {
  return this.cookies.get("token");
}
getUser() {
  return this.http.get("https://icaro-api-v1.herokuapp.com/api/users");
}

getUserLogged() {
  const token = this.getToken();
  console.log(token)
  
}}