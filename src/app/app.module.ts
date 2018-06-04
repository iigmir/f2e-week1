import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListspaceComponent } from './listspace/listspace.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProgressComponent } from './progress/progress.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    ListspaceComponent,
    TasksComponent,
    ProgressComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
