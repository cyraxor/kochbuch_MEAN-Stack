import { Component, OnInit } from '@angular/core';
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
  currentRecept: Object = [];
  // currentRecept: Object = '';
  showOverlay= false;
  test: string = '';

  constructor(private receptsService: ReceptsService) { }

  ngOnInit() {
    this.receptsService.getLists().subscribe((recepts: any) => {
      console.log(recepts)
      this.recepts = recepts;
    })
  }

  showRecept(id: string) {
    this.receptsService.getSingleRecept(id).subscribe((recept: any ) => {
      console.log(recept);
      this.currentRecept = recept;
      console.log(this.currentRecept);
    })

    this.showOverlay = true;
    this.test = 'noscroll';
  }

  hideRecept(): void {
    this.showOverlay = false;
    this.test = '';
  }

}
