import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
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
  `
})

export class AnimalListComponent {
  animals: Animal[] = [
    new Animal('Bengal Tiger', 'Shere Khan', 6, 'carnivore', 'southeast asian jungle', 3, 'male', 'intimidation', 'mancubs'),
    new Animal('Emperor Penguin', 'James Bond', 2, 'carnivore', 'antarctic', 1, 'female', 'sliding on ice', 'orcas') ];


}
