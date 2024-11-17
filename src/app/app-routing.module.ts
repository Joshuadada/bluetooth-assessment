import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOneComponent } from './components/screen-one/screen-one.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreenTwoComponent } from './components/screen-two/screen-two.component';
import { ScreenThreeComponent } from './components/screen-three/screen-three.component';

const routes: Routes = [
  {
    path:'',
    component: HomeScreenComponent
  },
  {
    path:'screen-one',
    component: ScreenOneComponent
  },
  {
    path:'screen-two',
    component: ScreenTwoComponent
  },
  {
    path:'screen-three',
    component: ScreenThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
