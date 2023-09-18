import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendUrl = 'http://localhost:8080/backend';

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.backendUrl}/addUser`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.backendUrl}/getAllUsers`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/deleteUser?userId=${id}`);
  }
}
