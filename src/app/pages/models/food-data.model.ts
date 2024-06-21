export class FoodDataModel {
  id!: number;
  idFood?: number;
  food!: string;
  quantity!: string | number;
  notes?: string;
  alternatives?: FoodDataModel[];
}