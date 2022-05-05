import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { HERO } from '../herodata';
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
      email: [''],  
      first_name: [''],
      last_name: [''],
      street_address: [''],
      city: [''],
      state: [''],
      zipcode: [''],
      phone : [''],
      date: [''],
      age:0,
      interested: [''],
      recommend_option:[''],
      random_number:[''],
      comment:[''],
      prefer_atmosphere:[false],
      prefer_campus:[false],
      prefer_dormroom: [false],
      prefer_location:[false],
      prefer_sports:[false],
      prefer_students:[false]
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
    console.log(HERO);
    this.contactForm.value

    this.dataService.sendPostRequest(HERO).subscribe((data: any)=>{
      console.log ("Console Log in Post")
      console.log(data);
      
    })  
  }

  ngOnInit(): void {
  }

}
