import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Zuckerman's Zany Zoo</h1>
    <h3>Zoo residents on {{month}}/{{day}}/{{year}}</h3>
    <animal-list></animal-list>
    <hr>
    <div *ngIf='selectedAnimal'>
      <h2>{{selectedAnimal.species}}</h2>
      <h3>Edit Animal</h3>
      <label>Enter Animal name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Enter Animal age:</label>
      <input [(ngModel)]="selectedAnimal.age"><br>
      <label>Enter Animal diet type:</label>
      <input [(ngModel)]="selectedAnimal.diet">
      <label>Enter Animal location in zoo:</label>
      <input [(ngModel)]="selectedAnimal.location"><br>
      <label>Enter number of caretakers needed:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <label>Enter Animal sex:</label>
      <input [(ngModel)]="selectedAnimal.sex"><br>
      <label>Enter Animal likes:</label>
      <input [(ngModel)]="selectedAnimal.likes">
      <label>Enter Animal dislikes:</label>
      <input [(ngModel)]="selectedAnimal.dislikes">
      <button (click)="finishedEditing()">Done</button>
   </div>
  </div>
  `
})


export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear()
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
   this.selectedAnimal = null;
  }
}
