import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER + "/products");
  }

  public sendPostRequest(studentSurvey: any){
    return this.httpClient.post(this.REST_API_SERVER + "/studentSurvey", {studentSurvey});
  }
}
