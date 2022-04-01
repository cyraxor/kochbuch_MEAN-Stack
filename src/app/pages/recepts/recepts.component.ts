import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReceptsService } from 'src/app/core/recepts.service';
import { Recepts } from 'src/app/models/recepts.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recepts',
  templateUrl: './recepts.component.html',
  styleUrls: ['./recepts.component.scss']
})
export class ReceptsComponent implements OnInit {

  recepts?: Recepts[];
  currentRecept: any;
  ingredients: any;
  preparation: any;
  test: string = '';
  showOverlay= false;

  constructor(private receptsService: ReceptsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['catId']) {
          console.log(params)
          this.receptsService.getCategoryList(params['catId']).subscribe((recepts: any) => {
            this.recepts = recepts;
          })
        } else {
          this.receptsService.getLists().subscribe((recepts: any) => {
            this.recepts = recepts;
          })
        }
      }
    )
  }

  showRecept(receptId: string) {
    this.showOverlay = true;
    this.receptsService.getSingleRecept(receptId).subscribe((recept: any ) => {
      this.currentRecept = recept;
      // this.ingredients = recept.ingredients;
    })
    this.receptsService.getIngredientOfRecept(receptId).subscribe((ingredients: any) => {
      this.ingredients = ingredients;
    })
    this.receptsService.getPreparationOfRecept(receptId).subscribe((preparation: any) => {
      this.preparation = preparation
    })

    // this.test = 'noscroll';
  }

  hideRecept(): void {
    this.showOverlay = false;
    this.test = '';
  }
}
