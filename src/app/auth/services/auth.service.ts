import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../../shared/modals/login.modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7042/api/Auth'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Existing login method
  login(loginDetails: LoginDetails): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginDetails);
  }
  // activateAccount(userId: number): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/activate`, null, { params: { userId } });
  // }
  // sendResetPasswordEmail(email: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/send-reset-email/${email}`, {});
  // }
  // New reset password method
  // resetPassword(resetPasswordDto: ResetPasswordDto): Observable<any> {
  //   console.log(resetPasswordDto);
  //   return this.http.post<any>(`${this.apiUrl}/reset-password`, resetPasswordDto);
  // }
  // //change password
  // changePassword(changePasswordDto: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/change-password`, changePasswordDto);
  // }
}
