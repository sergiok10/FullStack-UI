import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/games/add-game/add-game.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameCardsComponent } from './components/home-page/game-cards/game-cards.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  },
  {
    path:'',
    component: GameCardsComponent
  },
  {
    path:'games',
    component: GamesListComponent
  },
  {
    path:'games/add',
    component: AddGameComponent
  },
  {
    path:'games/edit/:id',
    component: EditGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
