import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solusi Disruptif Digital';
  heroes = [
	  new Hero(1, 'Ironman'),
	  new Hero(13, 'Scarlet Witch'),
	  new Hero(15, 'Magneta'),
	  new Hero(20, 'Tornado')
	];
	myHero = this.heroes[0];
}
