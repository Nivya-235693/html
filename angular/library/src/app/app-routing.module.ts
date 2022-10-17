import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { ReturnlistComponent } from './returnlist/returnlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'returnlist',component:ReturnlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
