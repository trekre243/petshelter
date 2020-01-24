import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('/api/pets');
  }

  getPet(petID) {
    return this._http.get(`/api/pets/${petID}`);
  }

  createPet(petInfo) {
    return this._http.post('/api/pets', petInfo);
  }

  editPet(petID, petInfo) {
    return this._http.put(`/api/pets/${petID}`, petInfo);
  }

  likePet(petID) {
    return this._http.get(`/api/pets/${petID}/like`);
  }

  deletePet(petID) {
    return this._http.delete(`/api/pets/${petID}`);
  }

}
