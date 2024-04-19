import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }


  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    const nextCard = this.game.stack.pop(); // pop returnt letzten wert aus dem array und löscht ihn daraus
    if (!this.pickCardAnimation) {
      if (nextCard !== undefined) {
        this.currentCard = nextCard;
      } else {
        console.error('Keine weiteren Karten im Stapel!');
      }
      this.pickCardAnimation = true;

      console.log('new card:' + this.currentCard);
      console.log('game is', this.game);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }






}
