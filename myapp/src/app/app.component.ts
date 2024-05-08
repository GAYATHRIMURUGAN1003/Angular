import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  firstname: string="Gayathri"
  lastname:string="Murugan"
  SECONDPERSON: string="sivakamasundari"
  brother:string="venkatesh"
  age:string="24"
  designation:string="analyst"

  y=2;
  z=3;
  x=4;
  msg:string="hai";
  myEvent(){
    this.msg="bye";
  }
}
