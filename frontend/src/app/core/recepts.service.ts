import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Recepts } from '../models/recepts.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptsService {

  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('recepts');
  }

}
