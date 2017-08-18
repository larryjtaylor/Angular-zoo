import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Zuckerman's Zany Zoo</h1>
    <h3>Zoo residents on {{month}}/{{day}}/{{year}}</h3>

    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}} <button (click)="editAnimal(currentAnimal)">Edit Animal</button>
        <ul>
          <li>{{currentAnimal.name}}</li>
          <li>{{currentAnimal.age}} years old</li>
          <li>{{currentAnimal.diet}}</li>
          <li>{{currentAnimal.location}}</li>
          <li>{{currentAnimal.caretakers}} caretakers required</li>
          <li>{{currentAnimal.sex}}</li>
          <li>likes {{currentAnimal.likes}}</li>
          <li>doesn't like {{currentAnimal.dislikes}}</li>
        </ul>
      </li>
    </ul>
    <hr>
    <div>
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
   </div>
  </div>
  `
})


export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear()

  animals: Animal[] = [
    new Animal('Bengal Tiger', 'Shere Khan', 6, 'carnivore', 'southeast asian jungle', 3, 'male', 'intimidation', 'mancubs'),
    new Animal('Emperor Penguin', 'James Bond', 2, 'carnivore', 'antarctic', 1, 'female', 'sliding on ice', 'orcas') ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
