import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Recepts } from '../models/recepts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptsService {

  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('recepts');
  }

  getCategoryList(catId: string) {
    return this.webReqService.get(`categories/${catId}/recepts`)
  }

  getIngredientOfRecept(recept: Recepts) {
    return this.webReqService.get(`recepts/${recept._id}/ingredients`)
  }

  getPreparationOfRecept(recept: Recepts) {
    return this.webReqService.get(`recepts/${recept._id}/preparations`)
  }

  getSingleRecept(recept: Recepts) {
    return this.webReqService.get(`recepts/${recept._id}`)
  }

  increasClickCount(recept: Recepts) {
    return this.webReqService.patch(`recepts/${recept._id}`, {
      clicks: recept.clicks + 1,
    });

  }
}
