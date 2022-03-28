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

  public getSingleRecept(id: string) {
    return this.webReqService.get(`recepts/${id}`)
  }
}
