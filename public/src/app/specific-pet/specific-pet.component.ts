import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-specific-pet',
  templateUrl: './specific-pet.component.html',
  styleUrls: ['./specific-pet.component.css']
})
export class SpecificPetComponent implements OnInit {
  pet = {
    _id: '',
    name: '',
    type: '',
    description: '',
    likes: 0,
    skills: {
      skill1: '',
      skill2: '',
      skill3: ''
    }
  };

  liked: boolean = false;

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

  likePet() {
    this.liked = true;
    this._http.likePet(this.pet._id).subscribe(data => {
      if(data['message'] == 'success') {
        this.pet.likes = data['data']['likes'];
        this.liked = true;
      }
    });
  }

  adoptPet() {
    this._http.deletePet(this.pet._id).subscribe(data => {
      console.log(data);
      if(data['message'] == 'success') {
        this._router.navigate(['/pets']);
      }
    })
  }


}
