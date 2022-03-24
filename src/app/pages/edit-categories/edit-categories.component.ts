import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/category.service';
import { NavbarService } from 'src/app/core/navbar.service';
import { Categories } from 'src/app/models/categories.model'

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  categories?: Categories[];

  constructor(private navbarService: NavbarService, private categoryService: CategoryService  ,private router: Router) { }

  ngOnInit(): void {
    this.navbarService.getCategoryList().subscribe((categories: any) => {
      console.log(categories)
      this.categories = categories;
    })
  }

  cancelEdit() {
    this.isShowDiv = false;
  }

  title: string  = '';
  id: string = '';
  isShowDiv = false;

  displayEdit(title: string, _id: string) {
    console.log(title);
    this.isShowDiv = true;
    this.title = title;
    this.id = _id;

  }

  updateCategory(title: string, _id: string) {
    this.categoryService.updateCategory(title, _id).subscribe(() => {
      // this.isShowDiv = false;
      // this.router.navigate(['/edit-categories']);
      // this.ngOnInit();
      this.reloadPage();
    });
  }

  newCategory(title: string) {
    this.categoryService.createCategory(title).subscribe(() => {
      this.reloadPage();
    })
  }

  reloadPage(): void {
    this.isShowDiv = false;
    // this.router.navigate(['/edit-categories']);
    this.ngOnInit();
  }



// unused - delete
  // hideEdit(editTitle: string) {
  //   this.isShowDiv = false;
  // }
}
