import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenOneComponent } from './components/screen-one/screen-one.component';
import { ScreenTwoComponent } from './components/screen-two/screen-two.component';
import { ScreenThreeComponent } from './components/screen-three/screen-three.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ScreenThreeComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
