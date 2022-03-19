import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavbarService } from 'src/app/core/navbar.service';
import { Categories } from 'src/app/models/categories.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories?: Categories[];

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navbarService.getCategoryList().subscribe((categories: any) => {
      console.log(categories)
      this.categories = categories;
    })
  }
}
