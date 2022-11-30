import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  addGameRequest: Game = {
    id: '',
    name: '',
    description: '',
    platform: '',
    img: ''
  }
  constructor(private gameService: GamesService, private router: Router) { }

  ngOnInit() : void {
  }

  addGame(){
    this.gameService.addGame(this.addGameRequest)
    .subscribe({
      next: (game) => {
        this.router.navigate(['games']);

      }
    });
  }

}
