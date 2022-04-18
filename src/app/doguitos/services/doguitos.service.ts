import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoguitosService {
  http: any;


  constructor(private httpClient: HttpClient) {}

    public likes: any = []


  doguitos(){
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random')
  };









}
