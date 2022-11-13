import { Component, OnInit, Input } from '@angular/core';
import { count, findIndex } from 'rxjs';

@Component({
  selector: 'app-bookseat',
  templateUrl: './bookseat.component.html',
  styleUrls: ['./bookseat.component.scss'],
})
export class BookseatComponent implements OnInit {
  [x: string]: any;
  value = '';
  //  displayvalue : any;
  // item: any;
  // select: any;
  seatnos: any;

  constructor() {}

  onKey(enteredSeats: string) {
    this.value = enteredSeats
    // this.seatnos = this.value;
    // localStorage.setItem('seatNo', JSON.stringify(this.seatnos));
  }

  ngOnInit(): void {
    let noseat;
    // let inputs = document.getElementById('seats') as HTMLInputElement | null;
    // inputs?.addEventListener('input', function (event) {
    //  noseat = event.target as HTMLInputElement;
    // this.value = noseat.value ;
    // console.log( this.value )

    // });
    // console.log(this.value as HTMLInputElement)
    // let seattype: any;

    // let seattype =( document.getElementById('browser') as HTMLInputElement);
    // console.log(seattype);
    // seattype?.addEventListener('input', function (event) {
    // let seatselect = event.target as HTMLInputElement;
    // console.log(seatselect.value);
    // })

    let select = document.getElementsByClassName(
      'seat-section'
    ) as HTMLCollectionOf<HTMLElement>;
    var seatno: any[] = [];
    let seatnoss = localStorage.getItem('seatNo');
    let count = seatnoss;
    let seattypes = 'premium';
    let selectingseat = 0;
    function checking(
      count: any,
      selectingseat: any,
      select: any,
      seattypes: any
    ) {
      for (let i = 0; i < select.length; i++) {
        if (select[i].classList.contains('seat-selection')) {
          select[i].classList.remove('seat-selection');
        }
      }
    }

    for (let i = 0; i < select.length; i++) {
      select[i].addEventListener('click', function (event) {
        let chooseseat = event.target as HTMLInputElement;
        if (select[i].classList.contains('seat-selection')) {
          select[i].classList.remove('seat-selection');
        } else {
          if (selectingseat >= Number(count)) {
            checking(count, selectingseat, select, seattypes);
            selectingseat = 0;
            select[i].classList.add('seat-selection');
          } else {
            selectingseat++;
            select[i].classList.add('seat-selection');
          }

          seatno.push(i);
        }
        localStorage.setItem('item', JSON.stringify(seatno));
      });
    }

    let submit = document.getElementById('submit') as HTMLInputElement | null;
    let seatadded: any;

    submit?.addEventListener('click', function (event) {
      seatadded = localStorage.getItem('item');
      for (let i = 0; i < seatadded.length / 2; i++) {
        select[i].classList.add('seat-selection');
      }
      // localStorage.setItem('item',JSON.stringify(seatadded) )
      // checking(count,selectingseat,select,seattypes)
    });
  }

  getSeatType() {}
  seatType(seatType: any) {
    throw new Error('Method not implemented.');
  }
}
