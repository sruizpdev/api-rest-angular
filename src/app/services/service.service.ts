import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService { 
  private allData: any;
  constructor(private httpClient: HttpClient ) {
    this.allData = this.httpClient
      .get('https://reqres.in/api/users?page=2')
      .pipe(map((data) => data['data']));
  }
  getData() {
    return this.allData;
  }

  getDetail(idx: number) {
    return this.allData[idx];
  }
}
