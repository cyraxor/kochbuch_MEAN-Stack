import { Component, OnInit } from '@angular/core';
import { ReceptsService } from 'src/app/core/recepts.service';
import { ReceptsComponent } from '../recepts/recepts.component';

@Component({
  selector: 'app-show-recept',
  templateUrl: './show-recept.component.html',
  styleUrls: ['./show-recept.component.scss']
})
export class ShowReceptComponent implements OnInit {

  constructor(private receptsService: ReceptsService) { }



  ngOnInit() {

  }


}
