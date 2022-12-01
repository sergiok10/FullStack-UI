/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameCardsComponent } from './game-cards.component';

describe('GameCardsComponent', () => {
  let component: GameCardsComponent;
  let fixture: ComponentFixture<GameCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
