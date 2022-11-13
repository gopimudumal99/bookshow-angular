import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seats } from 'src/app/seats';

@Component({
  selector: 'app-seats-lists',
  templateUrl: './seats-lists.component.html',
  styleUrls: ['./seats-lists.component.scss'],
})
export class SeatsListsComponent implements OnInit {
  @Input() seat!: Seats;
  @Input() seatType!: string;
  @Input() seatInput!: string
  @Output() activeSeat: EventEmitter<Seats> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    let btns = document.getElementsByClassName('standard');
      for (let i = 0; i < btns.length; i++) {
        let btn = btns[i] as HTMLButtonElement;
        btn.disabled = true;
      }
  }

  onClick(seat: Seats) {
    seat.hasActive = !seat.hasActive;
    this.activeSeat.emit(seat);
  }
}
