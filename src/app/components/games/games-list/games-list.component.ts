import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit{

  games: Game[] = [];
  constructor(private gamesServices : GamesService) { }

  ngOnInit(): void {
    this.gamesServices.getAllGames()
    .subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (response) => {
        console.log(response);
      }
    });


  }

}
