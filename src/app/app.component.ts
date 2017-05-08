import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public evenElements: number[] = [];
  public oddElements: number[] = [];


  //methods
  public onGameStarted(elementData: number): void
  {
    //debugger;
    if (elementData % 2 === 0)
      this.evenElements.push(elementData);
    else
      this.oddElements.push(elementData);
  }

}
