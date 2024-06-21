import {Component, inject} from '@angular/core';
import {foodListData, seasonsData} from '../../utils/constants';
import {FoodListModel} from '../models/food-list.model';
import {SeasonsModel} from '../models/seasons.model';
import {Router} from '@angular/router';
import {SEASON} from '../../utils/enums';
import {FoodModel} from '../models/food.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected foodList: FoodListModel = foodListData;
  protected seasonsList: SeasonsModel = seasonsData;
  protected readonly SEASON = SEASON;
  private readonly router = inject(Router);

  protected onClickSeason(season: number): Promise<boolean> {
    return this.router.navigate([`season/${season}`]);
  }

  protected onClickCalculator(food: FoodModel): Promise<boolean> {
    return this.router.navigate([`calculator/${food.idFood}`]);
  }
}
