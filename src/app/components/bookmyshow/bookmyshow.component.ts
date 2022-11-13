import { Component, OnInit } from '@angular/core';
import { Seats } from 'src/app/seats';

@Component({
  selector: 'app-bookmyshow',
  templateUrl: './bookmyshow.component.html',
  styleUrls: ['./bookmyshow.component.scss'],
})
export class BookmyshowComponent implements OnInit {
  premiumSeats: Seats[];
  standardSeats: Seats[];
  seatSelectType: any;
  seatInputNos: any;
  reasign: any;
  constructor() {
    let premium = localStorage.getItem('premium') as string;
    let standard = localStorage.getItem('standard') as string;

    if (premium == null) {
      this.premiumSeats = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        hasBooked: false,
        hasActive: false,
        seatType: 'premium',
      }));
      localStorage.setItem('premium', JSON.stringify(this.premiumSeats));
    } else {
      this.premiumSeats = JSON.parse(premium);
    }
    if (standard == null) {
      this.standardSeats = Array.from({ length: 50 }, (_, i) => ({
        id: i + 51,
        hasBooked: false,
        hasActive: false,
        seatType: 'standard',
      }));
      localStorage.setItem('standard', JSON.stringify(this.standardSeats));
    } else {
      this.standardSeats = JSON.parse(standard);
    }

    // console.log(this.premiumSeats);
    // console.log(this.standardSeats);
  }

  ngOnInit(): void {}

  handleActive(seat: Seats) {
    console.log(this.seatInputNos);
    if (this.seatInputNos === undefined) {
      seat.hasActive = false;
      return alert('please select the input no. of seats');
    }

    if (this.seatInputNos) {
      let premiumIndex = this.premiumSeats.indexOf(seat);
      let standardIndex = this.standardSeats.indexOf(seat);

      this.standardSeats[standardIndex] = seat;
      this.premiumSeats[premiumIndex] = seat;

      this.seatInputNos--;
    } else {
      
      // set all active seats to be false for premium
      this.premiumSeats = this.premiumSeats.map((seat) => ({
        ...seat,
        hasActive: false,
      }));
      
      // set all active seats to be false for standard
      this.standardSeats = this.standardSeats.map((seat) => ({
        ...seat,
        hasActive: false,
      }));
      
      this.seatInputNos = this.reasign;
    }

  }

  checkout() {
    let selectedSeats = this.premiumSeats.filter(
      (seat) => seat.hasActive === true
    );
    for (let i = 0; i < selectedSeats.length; i++) {
      selectedSeats[i].hasActive = false;
      selectedSeats[i].hasBooked = true;
      let index = this.premiumSeats.indexOf(selectedSeats[i]);
      this.premiumSeats[index] = selectedSeats[i];
    }
    localStorage.setItem('premium', JSON.stringify(this.premiumSeats));
    let input = document.getElementsByTagName('input');
    this.seatInputNos = undefined;
    input[0].value = '0';
  }

  seatTypeFun(seatType: string) {
    this.seatSelectType = seatType;
    console.log('type', seatType);
  }

  seatInputFun(inputSeats: string) {
    this.seatInputNos = inputSeats;
    this.reasign = inputSeats;
    console.log('seatInput', inputSeats);
    localStorage.setItem('inputSeats', JSON.stringify(this.seatInputNos));
  }
}
