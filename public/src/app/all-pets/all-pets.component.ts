import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

  pets = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getPets().subscribe(data => {
      this.pets = data['data'];
    })
  }

}
