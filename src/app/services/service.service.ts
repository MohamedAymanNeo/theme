import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  collapse:Boolean = false;

  updatedCollapse = new Subject<Boolean>();

  changeTopbar() {
   return this.updatedCollapse.asObservable();
  }

  changeCollapse() {
    this.collapse = !this.collapse;
    this.updatedCollapse.next(this.collapse);
  }


}
