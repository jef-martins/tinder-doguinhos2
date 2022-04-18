import { Component, Input, OnInit } from '@angular/core';
import { DoguitosService } from '../services/doguitos.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor(
    private doguitosService: DoguitosService
  ) { }

 likes = this.doguitosService.likes
  ngOnInit(): void {
  }

}
