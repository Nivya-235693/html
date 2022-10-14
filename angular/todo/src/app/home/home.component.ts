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
  listd:any[]=[];
  
  EnterSubmit(item:String,bo:any,date:any)
    {
      
      if(item!="")
this.list.push({item});
this.listd.push({date});
bo.value=""

}
  remove(i:number)
  {
this.list.splice(i,1);
this.listd.splice(i,1);
  }
}