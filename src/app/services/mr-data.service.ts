import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MRDataService {

  constructor(private http: HttpClient) { }

  getAll(){
	  return this.http.get(`https://kol2tai.herokuapp.com/api/forum/posts`);
  }
  getById(id: any){
	  return this.http.get(`https://kol2tai.herokuapp.com/api/forum/posts/${id}`);
  }

}
