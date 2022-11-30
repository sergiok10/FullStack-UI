import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/games/add-game/add-game.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';

const routes: Routes = [
  {
    path:'',
    component: GamesListComponent
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
