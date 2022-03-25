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
  isShowDelete = false;
  headline: any;
  buttonToggler = false;

  displayEdit(title: string, _id: string) {
    this.headline = "Kategorie bearbeiten"
    this.isShowDiv = true;
    this.title = title;
    this.id = _id;
    this.buttonToggler = false;
  }

  updateCategory(title: string, _id: string) {
    this.categoryService.updateCategory(title, _id).subscribe(() => {
      this.reloadPage();
    });
  }

  displayNew(): void {
    this.headline = 'Neue Kategorie';
    this.title = '';
    this.buttonToggler = true;
    this.isShowDiv = true;
  }

  newCategory(title: string) {
    this.categoryService.createCategory(title).subscribe(() => {
      this.reloadPage();
    })
  }

  reloadPage(): void {
    this.isShowDiv = false;
    this.isShowDelete = false;
    this.router.navigate(['/edit-categories']);
    this.ngOnInit();
  }

  showDeleteDialog(title: string, _id: string) {
    this.isShowDelete = true;
    this.headline = "Kategorie löschen"
    this.title = title;
    this.id = _id;
  }

  deleteCategory(_id: string) {
    this.categoryService.deleteCategory(_id).subscribe(() => {
      this.reloadPage();
    })
  }

// unused - delete
  // hideEdit(editTitle: string) {
  //   this.isShowDiv = false;
  // }
}
