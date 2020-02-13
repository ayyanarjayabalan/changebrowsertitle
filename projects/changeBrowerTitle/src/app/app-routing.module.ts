import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


const routes: Routes = [
  {
    path:'page1', component: Page1Component, data: {title: 'Page 1 Title'}
  },
  {
    path:'page2', component: Page2Component, data: {title: 'Page 2 Title'}
  },
  {
    path:'page3', 
    component: Page3Component, 
    data: {title: 'Page 3 Title'},
    children: [{ path: 'child1', component: Page3Component, data: {title: 'Page 3 Child 1 Title'}} ]
  },
  {
    path:'**', component: Page1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
