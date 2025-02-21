import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe-app1',
    loadChildren: () => import('remoteapp1/homeModule').then((module) => module.HomeModule)
  },
  {
    path: 'mfe-app2',
    loadChildren: () => import('remoteapp2/homeModule').then((module) => module.HomeModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
