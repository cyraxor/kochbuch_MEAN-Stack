import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/core/navbar.service';
import { Categories } from 'src/app/models/categories.model'

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  categories?: Categories[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.getCategoryList().subscribe((categories: any) => {
      console.log(categories)
      this.categories = categories;
    })
  }

  cancelEdit() {

  }

  title: string  = '';
  isShowDiv = false;

  displayEdit(title: string) {
    console.log(title);
    this.isShowDiv = true;
    this.title = title;
  }

  hideEdit(editTitle: string) {
    this.isShowDiv = false;
    alert(editTitle);
  }

}
