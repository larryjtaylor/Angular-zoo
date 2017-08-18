import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
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
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
     this.clickSender.emit(animalToEdit);
   }
}
