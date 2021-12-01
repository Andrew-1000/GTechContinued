import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './../../model/region';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private _getRegionUrl = `https://gtechwms.herokuapp.com/region?limit=25&offset=0`
  private _addRegionUrl = `https://gtechwms.herokuapp.com/region`

  constructor(private _http:HttpClient) { }

  getRegion(): Observable<Region[]> {
    return this._http.get<Region[]>(this._getRegionUrl);
  }

  addRegion(){
    return this._http.post(this._addRegionUrl, {
      //Form names to be submitted e.g name 
    }).toPromise().then((region: any) => {
      console.log(region)
    })
  }
}
