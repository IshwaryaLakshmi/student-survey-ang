import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/";
  //"http://ec2-54-242-46-150.compute-1.amazonaws.com:8080/";
  // http://localhost:8080/students/getAll
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER + "students/getAll");
  }

  public sendPostRequest(studentSurvey: any){
    return this.httpClient.post(this.REST_API_SERVER + "students/addStudent", {studentSurvey});
  }
}
