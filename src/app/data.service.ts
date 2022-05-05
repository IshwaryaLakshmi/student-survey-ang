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

    studentSurvey = {
      "email": "trial85@gmu.edu",
      "first_name": "George",
      "last_name": "Mason",
      "street_address": "1111 Mason Ave",
      "city": "Fairfax",
      "state": "VA",
      "zipcode": 22030,
      "phone": "9586324175",
      "date": "2022-05-01",
      "interested": "School",
      "recommend_option": "Likely",
      "random_number": "1,5,3,6,4,2,10,52,69,54",
      "comment": "nothing",
      "prefer_atmosphere": true,
      "prefer_campus": false,
      "prefer_dormroom": false,
      "prefer_location": false,
      "prefer_sports": false,
      "prefer_students": false,
      "age": 12
  };
    return this.httpClient.post(this.REST_API_SERVER + "students/addStudent", {studentSurvey});
  }
}
