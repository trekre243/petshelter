import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  newPet = {
    name: '',
    type: '',
    description: '',
    skills: {
      skill1: '',
      skill2: '',
      skill3: ''
    }
  }

  nameEdited = false;
  typeEdited = false;
  descriptionEdited = false;

  nameTaken = false;

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addPet() {
    this._http.createPet(this.newPet).subscribe(data => {
      if(data['message'] == 'success') {
        this.newPet = {
          name: '',
          type: '',
          description: '',
          skills: {
            skill1: '',
            skill2: '',
            skill3: ''
          }
        };
        this.nameTaken = false;
        this.nameEdited = false;
        this.typeEdited = false;
        this.descriptionEdited = false;

        this._router.navigate(['/pets']);
        
      } else if(data['data'] == 'name taken') {
        this.nameTaken = true;
      }
    });
  }
}