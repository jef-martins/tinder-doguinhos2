import { Component, OnInit } from '@angular/core';
import { DoguitosFacade } from '../doguitos.facade';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DoguitosService } from '../services/doguitos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeComponentState',[
      state('show', style({opacity: 1})),
      state('hide', style ({opacity: 0})),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  show = true;

  dogs: any;
  public likes: {
    tipoLike: string,
    img: string
  }[] = []

  public doguinhos: any;

  constructor(
    private doguitosFacade: DoguitosFacade,
    private doguitosService: DoguitosService
    ) { }

  get stateName(){
    return this.show ? 'show' : 'hide'
  }



toggle(){
  this.show = !this.show;
}



  ngOnInit(): void {
    this.listarDoguinhos()
  }

  listarDoguinhos(){
    const doguinhos = this.doguitosFacade.doguitos()
    .subscribe((d) => {
      this.doguinhos = [d]
    })
  }

  like(){
    this.likes.push({
      tipoLike: 'Like',
      img: this.doguinhos[0].message
    })
    console.log(this.likes)
    this.doguitosService.likes = this.likes
    this.listarDoguinhos()
  }

  superlike(){
    this.likes.push({
      tipoLike: 'Superlike',
      img: this.doguinhos[0].message
    })
    console.log(this.likes)
    this.doguitosService.likes = this.likes
    this.listarDoguinhos()
  }

  dislike(){
    this.likes.push({
      tipoLike: 'Dislike',
      img: this.doguinhos[0].message
    })
    console.log(this.likes)
    this.doguitosService.likes = this.likes
    this.listarDoguinhos()  }

}
