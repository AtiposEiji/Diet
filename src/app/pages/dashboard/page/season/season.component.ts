import {Component, inject} from '@angular/core';
import {dietsData} from '../../../../utils/constants';
import {DietsModel} from '../../../models/diets.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-season',
  standalone: true,
  templateUrl: './season.component.html',
  styleUrl: './season.component.scss'
})
export class SeasonComponent {
  protected diets: DietsModel[] = dietsData;
  protected readonly seasonId!: number;
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.seasonId = Number(this.activatedRoute.snapshot.paramMap.get('seasonId'));
  }

  protected goBack() {
    return this.router.navigate([``]);
  }

  protected onClickDay(idDay: number): Promise<boolean> {
    return this.router.navigate([`season/${this.seasonId}/day/${idDay}`]);
  }
}
