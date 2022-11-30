import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGameComponent } from './components/games/add-game/add-game.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    AddGameComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
