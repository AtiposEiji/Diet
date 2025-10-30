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

  protected goBack() {
    return this.router.navigate([`season/${this.seasonId}`]);
  }
}
