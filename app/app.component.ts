import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
  <h1>Zuckerman's Zany Zoo</h1>
  <h3>Zoo inhabitants on {{month}}/{{day}}/{{year}}</h3>

  <ul>
    <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}}
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
      new Animal('Emperor Penguin', 'James Bond', 2, 'carnivore', 'antarctic', 1, 'female', 'sliding on ice', 'orcas')
    ]
    }

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
}
