import { Injectable } from "@angular/core";
import { DoguitosService } from "./services/doguitos.service";

@Injectable({
  providedIn: 'root'
})

export class DoguitosFacade{

  constructor(private doguitosService: DoguitosService){

  }

  doguitos(){
    return this.doguitosService.doguitos()
  }
}
