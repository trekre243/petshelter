import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { SpecificPetComponent } from './specific-pet/specific-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  {path: 'pets', component: AllPetsComponent},
  {path: 'pets/new', component: NewPetComponent},
  {path: 'pets/:id', component: SpecificPetComponent},
  {path: 'pets/:id/edit', component: EditPetComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
