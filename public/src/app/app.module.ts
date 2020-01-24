import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { SpecificPetComponent } from './specific-pet/specific-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

import { HttpService } from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    NewPetComponent,
    SpecificPetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
