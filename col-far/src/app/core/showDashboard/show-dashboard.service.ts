import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowDashboardService {
  private showDashboard!: string | undefined;

  constructor() {}
  setSelectedComponent(selectedComponent: string | undefined) {
    this.showDashboard = selectedComponent;
  }
  getSelectedComponent() {
    return this.showDashboard;
  }
}
