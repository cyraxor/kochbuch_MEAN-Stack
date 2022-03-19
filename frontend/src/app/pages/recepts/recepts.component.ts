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

  constructor(private receptsService: ReceptsService) { }

  ngOnInit() {
    this.receptsService.getLists().subscribe((recepts: any) => {
      console.log(recepts)
      this.recepts = recepts;
    })
  }
}
