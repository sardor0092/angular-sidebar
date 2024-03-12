import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = "30a859a5e9ad49ae9a58640937f15dc2";
  apiUrl = "https://openexchangerates.org/api/latest.json"
  private baseCurrency = "USD";
  private targetCurrency = "UZS"
  constructor(private http:HttpClient) {}
  getExchangeRate():Promise<number>{
    const url  = `${this.apiUrl}?app_id=${this.apiKey}&base=${this.baseCurrency} `
    return this.http.get(url).toPromise().then((data:any)=>{
      return data.rates[this.targetCurrency];
    })
    .catch((error:any) =>{
      console.log("Error" , error);
      return null;
      
    });
    
  }}
