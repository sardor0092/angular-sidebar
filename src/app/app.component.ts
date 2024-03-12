import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usdToUZSRate!: number ;
  usdToUZS!:number ; 
  uzdAmount!: number ;
  usdAmount!: number ;
  constructor (private currencyService:CurrencyService){}
  ngOnInit(): void {
    this.currencyService.getExchangeRate().then(rate =>{
      this.usdToUZSRate = rate;
    });
    }
    convert():void {
      this.uzdAmount = this.usdAmount * this.usdToUZSRate;
    }
  }


