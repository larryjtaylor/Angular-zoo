import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <div class='jumbotron'>
      <h1>Zuckerman's Zany Zoo</h1>
    </div>
    <h3>Zoo residents on {{month}}/{{day}}/{{year}}</h3>
    <animal-list [childAnimalList]='masterAnimalList' (clickSender)='editAnimal($event)'></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal"  (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Animals';

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal('Bengal Tiger', 'Shere Khan', 6, 'carnivore', 'southeast asian jungle', 3, 'male', 'intimidation', 'mancubs'),
    new Animal('Emperor Penguin', 'James Bond', 2, 'carnivore', 'antarctic', 1, 'female', 'sliding on ice', 'orcas'),
    new Animal('dolphin', 'Chucky', 4, 'carnivore', 'water world', 2, 'female', 'fish', 'beach balls'),
    new Animal('giraffe', 'Miguel', 11, 'herbivore', 'sarangeti', 1, 'male', 'trees', 'mean people'),
    new Animal('koala', 'Quigley', 1, 'herbivore', 'outback', 1, 'male', 'climbing', 'Miguel') 
  ];

  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
   this.selectedAnimal = null;
  }
  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
