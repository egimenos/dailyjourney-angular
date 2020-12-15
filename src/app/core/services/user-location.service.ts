import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeoPosition } from '../interfaces/travel-payload';

@Injectable({
  providedIn: 'root',
})
export class UserLocationService {
  private userOriginSubject: BehaviorSubject<GeoPosition>;
  public userOrigin: Observable<GeoPosition>;

  constructor() {
    this.userOriginSubject = new BehaviorSubject<GeoPosition>(null);
    this.userOrigin = this.userOriginSubject.asObservable();
  }

  public setUserOrigin(position: GeoPosition): void {
    this.userOriginSubject.next(position);
  }
}
