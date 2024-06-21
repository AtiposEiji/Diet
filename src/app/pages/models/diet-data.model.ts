import {FoodDataModel} from './food-data.model';

export class DietDataModel {
  id!: number;
  breakfast!: FoodDataModel[];
  midMorningSnack!: FoodDataModel[];
  lunch!: FoodDataModel[];
  midAfternoonSnack!: FoodDataModel[];
  dinner!: FoodDataModel[];
}