import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {foodListData} from '../../../../utils/constants';
import {FOOD} from '../../../../utils/enums';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  protected quantity: number = 0;
  protected calculationResult: string | number = '';
  protected readonly foodId!: number;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.foodId = Number(this.activatedRoute.snapshot.paramMap.get('idFood'));
  }

  protected goBack(): Promise<boolean> {
    return this.router.navigate(['']);
  }

  protected onClickCalculator(): void {
    switch (this.foodId) {
      case FOOD.PASTA_RISO_ASCIUTTI:
      case FOOD.PASTA_RISO_BRODO:
      case FOOD.FARRO_ORZO:
      case FOOD.TORTELLINI_ASCIUTTI:
      case FOOD.TORTELLINI_BRODO:
      case FOOD.GNOCCHI_PATATE:
      case FOOD.LASAGNE:
      case FOOD.POLLO_CONIGLIO:
      case FOOD.TACCHINO_FARAONA:
      case FOOD.AGNELLO_MAIALE:
      case FOOD.TRIPPA:
      case FOOD.PESCE_GENERALE:
      case FOOD.MITILI_SEPPIA_RAZZA:
      case FOOD.CALAMARO_TROTA:
      case FOOD.BACCALA_STOCCAFIS:
      case FOOD.WURSTEL:
      case FOOD.PATATE:
      case FOOD.FAGIOLI:
      case FOOD.PISELLI_FAGIOLINI:
      case FOOD.CAROTE:
      case FOOD.CECI:
      case FOOD.CAVOLFIORE:
      case FOOD.ZUCCHINE:
      case FOOD.PURE:
      case FOOD.FINOCCHI:
      case FOOD.VERDURE:
        this.calculationResult = this.calculateCookedQuantity(this.quantity);
        break;
      default:
        this.calculationResult = 'Food ID not recognized.';
    }
  }

  private calculateCookedQuantity(quantity: number): string | number {
    let result: number = quantity;
    const allDishes = [
      ...foodListData.firstDishes,
      ...foodListData.secondDishes,
      ...foodListData.sideDishes
    ];
    allDishes.forEach(dish => {
      if (this.foodId === dish.idFood) {
        result = (dish.cookedWeight * Number(quantity)) / dish.rawWeight;
      }
    });
    return `${Math.round(result)}`;
  }
}
