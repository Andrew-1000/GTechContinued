import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workorder } from '../../model/workorder';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService {

  private _workorderUrl = "#"
  // private _workorderUrl = "https://gtechwms.herokuapp.com/teams?limit=25&offset=0"


  constructor(private http: HttpClient) { }

  getWorkorders(): Observable<Workorder[]>{
    return this.http.get<Workorder[]>(this._workorderUrl)
  }

  postWorkorder() {
    return this.http.post(this._workorderUrl, {
      //Form names to be submitted e.g workorder number, date created etc
    }).toPromise().then((workorder: any) => {
      console.log(workorder)
    })
  }

}
