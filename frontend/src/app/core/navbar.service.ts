import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private webReqService: WebRequestService) { }

  getCategoryList() {
    return this.webReqService.get('categories');
  }
}
