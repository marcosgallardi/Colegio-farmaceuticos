import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowDashboardService {
  private showDashboard!: string;

  constructor() {}
  setSelectedComponent(selectedComponent: string) {
    this.showDashboard = selectedComponent;
  
  }
  getSelectedComponent() {
    return this.showDashboard;
  }
}
