import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="allAnimals" selected="selected">All Animals</option>
  <option value="youngAnimals">Young Animals</option>
  <option value="matureAnimals">Mature Animals</option>
</select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.species}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
      <ul>
        <li>{{currentAnimal.name}}</li>
        <li>{{currentAnimal.age}} years old</li>
        <li>{{currentAnimal.diet}}</li>
        <li>{{currentAnimal.location}}</li>
        <li>{{currentAnimal.caretakers}} caretakers required</li>
        <li>{{currentAnimal.sex}}</li>
        <li>likes {{currentAnimal.likes}}</li>
        <li>doesn't like {{currentAnimal.dislikes}}</li><br>
      </ul>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
  editButtonHasBeenClicked(animalToEdit: Animal) {
     this.clickSender.emit(animalToEdit);
   }
}
