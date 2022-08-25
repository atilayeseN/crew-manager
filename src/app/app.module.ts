import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AddCrewComponent } from './components/add-crew/add-crew.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from "@angular/material/chips"
import { MatSelectModule } from "@angular/material/select"

@NgModule({
  declarations: [
    AppComponent,
    CrewListComponent,
    AddCrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
