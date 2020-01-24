import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  pet = {
    _id: '',
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
  descriptionEdited = false;s

  nameTaken = false;

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._http.getPet(params['id']).subscribe(data => {
        if(data['message'] == 'success') {
          this.pet = data['data'];
        }
      });
    });
  }

  editPet() {
    this._http.editPet(this.pet._id, this.pet).subscribe(data => {
      if(data['message'] == 'success') {
        let id = this.pet._id;
        this.pet = {
          _id: '',
          name: '',
          type: '',
          description: '',
          skills: {
            skill1: '',
            skill2: '',
            skill3: ''
          }
        };
        this.nameEdited = false;
        this.typeEdited = false;
        this.descriptionEdited = false;

        this.nameTaken = false;
        this._router.navigate(['/pets', id]);
      } else if(data['data'] == 'name taken') {
        this.nameTaken = true;
      }
    })
  }
}
