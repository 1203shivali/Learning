import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  public listVendor():Observable<any> {
    return  this.http.get('http://localhost:9898/main/vendor')
  }
public deleteVendor(vendorId: any):Observable<any>{
  return this.http.delete("http://localhost:9898/main/vendor/"+vendorId);
}
public addvendor(vendorName:any):Observable<any>{
  return this.http.post("http://localhost:9898/main/vendor",vendorName);

}
public updatevendor(vendorName:any):Observable<any>{
  return this.http.put("http://localhost:9898/main/vendor/",vendorName);
}
public viewvendor(vendorId:any):Observable<any>{
  return this.http.get("http://localhost:9898/main/vendor/"+vendorId);
}
public modifyvendor(Vendor :any):Observable<any>
{
  return this.http.put("https://localhost:9898/main/vendor",Vendor);
}
public viewAllVendor(vendorName:any):Observable<any>{
  return this.http.get("http://localhost:9898/main/vendor1/"+vendorName);
}
public verifyVendor(vendorName:any, vendorNumber : any):Observable<any>{
  return this.http.get("http://localhost:9898/main/verify/"+vendorNumber+"/"+vendorName);
}
}
