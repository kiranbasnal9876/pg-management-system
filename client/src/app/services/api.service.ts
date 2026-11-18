import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

const server_url = environment.apiUrl.endsWith('/')
  ? environment.apiUrl.slice(0, -1)
  : environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postApi<T = any>(url: string, data: any = {}): Observable<T> {
    const endpoint = url.startsWith('/') ? url : `/${url}`;
    return this.http.post<T>(`${server_url}${endpoint}`, data);
  }

  getApi<T = any>(url: string, params?: Record<string, any>): Observable<T> {
    const endpoint = url.startsWith('/') ? url : `/${url}`;
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.set(key, String(params[key]));
        }
      });
    }
    return this.http.get<T>(`${server_url}${endpoint}`, { params: httpParams });
  }

  getState(): Observable<any> {
    return this.http.get('assets/data/state_district.json');
  }

}

