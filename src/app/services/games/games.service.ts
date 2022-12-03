import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Game } from 'src/app/models/game.model';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllGames() : Observable<Game[]> {
    return this.http.get<Game[]>(this.baseApiUrl + '/api/games');

  }

  addGame(addGameRequest: Game) : Observable<Game>{
    addGameRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Game>(this.baseApiUrl + '/api/games', addGameRequest);

  }

  getGame(id: string) : Observable<Game>{
    return this.http.get<Game>(this.baseApiUrl + '/api/games/' + id);
  }

  updateGame(id: string, updateGameRequest: Game) : Observable<Game>{
    return this.http.put<Game>(this.baseApiUrl + '/api/games/' + id, updateGameRequest);
  }

  deleteGame(id: string): Observable<Game>{
    return this.http.delete<Game>(this.baseApiUrl + '/api/games/' + id);
  }

}


