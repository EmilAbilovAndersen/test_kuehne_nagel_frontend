import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, CityPage } from '../model/city.model';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCities(page: number, pageSize: number, name?: string): Observable<CityPage> {
    let requestParams = `page=${page - 1}&pageSize=${pageSize}`;

    if (name) {
      requestParams = `${requestParams}&name=${name}`;
    }

    return this.http.get<CityPage>(`${environment.apiUrl}/cities?${requestParams}`);
  }

  public update(city: City): Observable<City> {
    return this.http.put<City>(`${environment.apiUrl}/cities`, city);
  }

}
