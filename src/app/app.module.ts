import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './security/http-interceptors/interceptor-providers';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IssueListService } from './issue-list/issue-list.service';
import { SharedModule } from './shared/shared.module';
import { TimelineViewModule } from './timeline-view/timeline-view.module';
import { ExternalEventRegistrationModule } from './external-event-registration/external-event-registration.module';
import { EventName } from './timeline-view/event/model/event-name.enum';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // TimelineViewModule.forFeature([EventName.Commented, EventName.Labeled, EventName.Renamed]),
    TimelineViewModule.forFeature(),
    AppRoutingModule,
    ExternalEventRegistrationModule,
    SharedModule
  ],
  declarations: [AppComponent, IssueListViewComponent, PageNotFoundComponent],
  providers: [httpInterceptorProviders, IssueListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
