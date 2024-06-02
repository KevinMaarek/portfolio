import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewToggleService {
  private isProjectViewSubject = new BehaviorSubject<boolean>(true);
  isProjectView$ = this.isProjectViewSubject.asObservable();

  setProjectView(isProjectView: boolean) {
    this.isProjectViewSubject.next(isProjectView);
  }
}
