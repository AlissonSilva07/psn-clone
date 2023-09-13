import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  gameType: string = 'Digital PS4';
  gamePrice: string = 'R$399,99';
}
