import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  private my_name: string;
  private my_nname: string;
  private age: number;
  private dob: string;
  private email: string;
  private blood: string;
  private fac: string;
  private major: string;
  
  constructor() { }

  ngOnInit() {
    this.my_name ="Pichaya Leerahathorn";
    this.my_nname= "Mint";
    this.age = 20;
    this.dob = "26 November 1996"
    this.email = "pichaya.mint@g.swu.ac.th"
    this.blood = "O";
    this.fac = "Srinakharinwirot University,Faculty of Science"
    this.major = "Computer Science"
    
  }

}