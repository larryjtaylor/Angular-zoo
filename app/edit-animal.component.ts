import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
<div *ngIf='childSelectedAnimal'>
  <h2>{{selectedAnimal.species}}</h2>
  <h3>Edit Animal</h3>
  <label>Enter Animal name:</label>
  <input [(ngModel)]="childSelectedAnimal.name">
  <label>Enter Animal age:</label>
  <input [(ngModel)]="childSelectedAnimal.age"><br>
  <label>Enter Animal diet type:</label>
  <input [(ngModel)]="childSelectedAnimal.diet">
  <label>Enter Animal location in zoo:</label>
  <input [(ngModel)]="childSelectedAnimal.location"><br>
  <label>Enter number of caretakers needed:</label>
  <input [(ngModel)]="childSelectedAnimal.caretakers">
  <label>Enter Animal sex:</label>
  <input [(ngModel)]="childSelectedAnimal.sex"><br>
  <label>Enter Animal likes:</label>
  <input [(ngModel)]="childSelectedAnimal.likes">
  <label>Enter Animal dislikes:</label>
  <input [(ngModel)]="childSelectedAnimal.dislikes">
  <button (click)="doneButtonClicked()">Done</button>
</div>
`
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
