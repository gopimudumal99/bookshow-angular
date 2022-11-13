import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seats-form',
  templateUrl: './seats-form.component.html',
  styleUrls: ['./seats-form.component.scss'],
})
export class SeatsFormComponent implements OnInit {
  @Output() seatTypeEvent: EventEmitter<string> = new EventEmitter();
  @Output() seatInputEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSeatsType(seatType: string) {
    this.seatTypeEvent.emit(seatType)
  }

  handleSeatsInput(inputSeats: string) {
    this.seatInputEvent.emit(inputSeats)
  }
  
}
