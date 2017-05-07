import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  //static value
  public static incrementingValue: number;

  //Timer
  public intervalID: any;

  //properties - events
  @Output()
  public gameStarted: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
    GameControlComponent.incrementingValue = 0;
  }

  public ngOnInit(): void {
  }

  //methods
  public onClickStart(): void
  {
      this.intervalID = setInterval(this.timerFunction, 1000);
  }

  public onClickStop(): void
  {
      clearInterval(this.intervalID);
  }

  //helper function
  public timerFunction(): void
  {
      this.gameStarted.emit(
        GameControlComponent.incrementingValue
      );

      GameControlComponent.incrementingValue++;
  }

}
