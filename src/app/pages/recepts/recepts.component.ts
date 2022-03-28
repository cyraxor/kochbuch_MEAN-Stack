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
  // @ViewChild('currentRecept')
  currentRecept?: Recepts[];
  test: string = '';
  showOverlay= false;
  id: string = '';


  constructor(private receptsService: ReceptsService) { }

  ngOnInit() {
    this.receptsService.getLists().subscribe((recepts: any) => {
      // console.log(recepts)
      this.recepts = recepts;
    })
  }

  showRecept(receptId: string) {
    this.showOverlay = true;
    console.log(receptId);
    this.receptsService.getSingleRecept(receptId).subscribe((recept: any ) => {
      this.currentRecept = recept.title;
      // console.log(this.currentRecept);
    })




    this.test = 'noscroll';
  }

  hideRecept(): void {
    this.showOverlay = false;
    this.test = '';
  }
}
