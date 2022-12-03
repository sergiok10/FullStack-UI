import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  gameDetails: Game = {
    id: '',
    name: '',
    description: '',
    platform: '',
    imgurl: ''
  };

  constructor(private route: ActivatedRoute, private gameService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.gameService.getGame(id)
          .subscribe({
            next: (response) => {
              this.gameDetails = response;
            }

          });
        }
      }
    })

  }

  updateGame(){
    this.gameService.updateGame(this.gameDetails.id, this.gameDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['games']);

      }
    })
  }

  deleteGame(id: string){
    this.gameService.deleteGame(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['games']);
      }
    })

  }

}
