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

@NgModule({
  declarations: [AppComponent, IssueListViewComponent, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [httpInterceptorProviders, IssueListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
