import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    title = 'first_project';
    list:any[]=[];
     add(item:String)
      {
        
  this.list.push({item});
  console.log(this.list)
  
    }
    remove(i:number)
    {
  this.list.splice(i,1);
    }
  }