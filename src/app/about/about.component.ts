import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  contactForm!: FormGroup  ;
  Recommend:any =['very likely', 'likely', 'unlikely'];

  constructor(public formBuilder: FormBuilder, private dataService: DataService) {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      firstName: [''],  
      lastName: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zipcode: [''],
      phone: [''],
      email : [''],
      date: [''],
      age:0,
      interested: [''],
      preferStudents:[''],
      preferLocation:[''],
      preferCampus:[''],
      preferAtmosphere:[''],
      preferDormroom:[''],
      preferSports: [''],
      recommendOption:[''],
      comment:[''],
      randomNumber:['']
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );

    this.dataService.sendPostRequest(this.contactForm.value).subscribe((data: any)=>{
      console.log ("Console Log in Post")
      console.log(data);
      
    })  
  }

  ngOnInit(): void {
  }

}
