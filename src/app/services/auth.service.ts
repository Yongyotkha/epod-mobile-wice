import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'https://tms.wicesupplychain.com/api/';
  private isRefreshing = false;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
  ) {}

  /**
   * พยายาม re-login อัตโนมัติเมื่อ token หมดอายุ
   * ถ้าไม่มี savedUsername/savedPassword → return false
   * ถ้า re-login สำเร็จ → save token ใหม่ → return true
   * ถ้า re-login ล้มเหลว → clear → navigate login → return false
   */
  async tryRefreshToken(): Promise<boolean> {
    if (this.isRefreshing) {
      // รอให้ refresh เสร็จก่อน (ป้องกัน concurrent calls)
      await this.delay(500);
      return localStorage.getItem('userLogin') !== null;
    }

    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (!savedUsername || !savedPassword) {
      // ไม่มีข้อมูล remember me → logout จริงๆ
      return false;
    }

    this.isRefreshing = true;
    try {
      const url = `${this.baseURL}token`;
      const body = new HttpParams()
        .set('username', savedUsername)
        .set('password', savedPassword)
        .set('grant_type', 'password');

      const headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      });

      const val: any = await this.http.post(url, body.toString(), { headers }).toPromise();

      if (val && val.access_token) {
        localStorage.setItem('userLogin', JSON.stringify(val));
        localStorage.setItem('loginStatus', 'true');
        console.log('[AuthService] Token refreshed successfully');
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn('[AuthService] Re-login failed:', err);
      return false;
    } finally {
      this.isRefreshing = false;
    }
  }

  /**
   * Handle token error: พยายาม re-login ก่อน ถ้าไม่ได้จึง logout
   */
  async handleTokenError(): Promise<boolean> {
    const refreshed = await this.tryRefreshToken();
    if (!refreshed) {
      // ไม่มีข้อมูลจำรหัสผ่าน → logout จริงๆ
      localStorage.clear();
      this.navCtrl.navigateRoot('/login');
      return false;
    }
    return true;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
