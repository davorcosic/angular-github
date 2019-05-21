import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: IssueListViewComponent }, { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
