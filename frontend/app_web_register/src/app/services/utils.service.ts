import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InfoAlert } from '../models/alerts.model';

/**
 * Service that provides utility functions and manages alerts and loading indicators.
 */
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private alerts: InfoAlert[] = [];
  alert$: BehaviorSubject<InfoAlert | null> =
    new BehaviorSubject<InfoAlert | null>(null);

  constructor() {}
  private loadingSubject = new Subject<any>();
  loadind$ = this.loadingSubject.asObservable();

  private lightboxSubject = new Subject<any>();
  lightbox$ = this.lightboxSubject.asObservable();

  /**
   * Displays an alert message with a specified type and automatically clears it after 5 seconds.
   * @param {string} message - The alert message to display.
   */
  showAlert(message: string, type: string) {
    const alert: InfoAlert = { message, type };
    this.alerts.push(alert);
    this.alert$.next(alert);
    setTimeout(() => {
      this.clearAlert(alert);
    }, 5000);
  }

  /**
   * Clears a specific alert from the list of displayed alerts.
   * @param {InfoAlert} alert - The alert to clear.
   */
  clearAlert(alert: InfoAlert) {
    const index = this.alerts.indexOf(alert);
    if (index !== -1) {
      this.alerts.splice(index, 1);
      this.alert$.next(null);
    }
  }

  /**
   * Displays a loading indicator.
   */
  showLoad() {
    this.loadingSubject.next(true);
  }

  /**
   * Hides the loading indicator.
   */
  hideLoad() {
    this.loadingSubject.next(false);
  }
}
