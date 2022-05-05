import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private REST_API_SERVER = "http://ec2-52-87-242-200.compute-1.amazonaws.com:30939/";
  //"http://ec2-54-242-46-150.compute-1.amazonaws.com:8080/";
  // http://localhost:8080/students/getAll
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER + "students/getAll");
  }

  public sendPostRequest(studentSurvey: any){

    return this.httpClient.post<Hero>(this.REST_API_SERVER + "students/addStudent", studentSurvey, httpOptions);
  }
}
