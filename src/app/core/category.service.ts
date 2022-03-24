import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private webReqService: WebRequestService) { }

  updateCategory(title: string,catId: string) {
    return this.webReqService.patch(`categories/${catId}`, {title});
  }

  createCategory(title: string) {
    return this.webReqService.post('categories', {title})
  }
}
