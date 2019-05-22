import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      this.onRouterEvent(routerEvent);
    });
  }

  private onRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
      this.loading = false;
    }
  }
}
