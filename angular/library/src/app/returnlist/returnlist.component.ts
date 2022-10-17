import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returnlist',
  templateUrl: './returnlist.component.html',
  styleUrls: ['./returnlist.component.css']
})
export class ReturnlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'library';
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
