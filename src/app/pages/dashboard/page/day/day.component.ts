import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DietsModel} from '../../../models/diets.model';
import {dietsData, foodListData} from '../../../../utils/constants';
import {FOOD} from '../../../../utils/enums';
import {FoodDataModel} from '../../../models/food-data.model';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent {
  protected diets: DietsModel[] = dietsData;
  protected readonly seasonId!: number;
  protected readonly dayId!: number;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.seasonId = Number(this.activatedRoute.snapshot.paramMap.get('seasonId'));
    this.dayId = Number(this.activatedRoute.snapshot.paramMap.get('dayId'));
  }

  protected cookedQuantity(data: FoodDataModel): string | number {
    switch (data.idFood) {
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
        return this.calculateCookedQuantity(data);
      default:
        return data.quantity;
    }
  }

  protected goBack() {
    return this.router.navigate([`season/${this.seasonId}`]);
  }

  private calculateCookedQuantity(data: FoodDataModel): string {
    let result: number = Number(data.quantity);
    const allDishes = [
      ...foodListData.firstDishes,
      ...foodListData.secondDishes,
      ...foodListData.sideDishes
    ];
    allDishes.forEach(dish => {
      if (data.idFood === dish.idFood) {
        result = (dish.cookedWeight * Number(data.quantity)) / dish.rawWeight;
      }
    });
    return `${Math.round(result)}g cotto`;
  }
}
