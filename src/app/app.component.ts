import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
<div id="main">
  <h1>{{title}}</h1>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
  <div class="left-padding"><label>id: </label>{{hero.id}}</div>
  <div class="left-padding"><label>name: </label>{{hero.name}}</div>
</div>`, 
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
