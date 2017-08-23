import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
    <div>
    <h1>New animal</h1>
    <label>Enter Animal species:</label>
    <input #newSpecies>
    <label>Enter Animal name:</label>
    <input #newName>
    <label>Enter Animal age:</label>
    <input #newAge><br>
    <label>Enter Animal diet type:</label>
    <input #newDiet>
    <label>Enter Animal location in zoo:</label>
    <input #newLocation><br>
    <label>Enter number of caretakers needed:</label>
    <input #newCaretakers>
    <label>Enter Animal sex:</label>
    <input #newSex><br>
    <label>Enter Animal likes:</label>
    <input #newLikes>
    <label>Enter Animal dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=' '; newName.value=' '; newAge.value=' '; newDiet.value=' '; newLocation.value=' '; newCaretakers.value=' '; newSex.value=' '; newLikes.value=' '; newDislikes.value=' ';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
  this.newAnimalSender.emit(newAnimalToAdd);

  }
}
