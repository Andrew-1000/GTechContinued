import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Warehouse } from '../../model/warehouse';
  import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private _warehouseUrl = "https://gtechwms.herokuapp.com/warehouses";


  constructor(private http: HttpClient) { }

  //Made a Get request from the warehouse service

  //Cast the Warehouse to a warehouse array

  //getWarehouse method returns an observable
  getWarehouse(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this._warehouseUrl);
  }

  postWarehouse(){
    return this.http.post(this._warehouseUrl, {
      //Form names to be submitted e.g name
    }).toPromise().then((warehouse: any) => {
      console.log(warehouse)
    })
  }
}
