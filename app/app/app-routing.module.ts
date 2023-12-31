import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {
  path:'main', component:HomeComponent
},
{path:'demo', component:DemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
