import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
 
@Injectable({
 providedIn: 'root'
})
export class JwtService {
 
 constructor(private http: HttpClient) { }
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
 
 login(email: string, password: string) {
 this.http.post<{ message: string, token: string}>('localhost:8081/login', {email, password}, this.httpOptions)
 .pipe(tap((res) => {
 localStorage.setItem('access_token', res.token);
 }))
 ;
 }
 
 logout() {
 localStorage.removeItem('access_token');
 }
 
 public get loggedIn(): boolean {
 return localStorage.getItem('access_token') !== null;
 }
}