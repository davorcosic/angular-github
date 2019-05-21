import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRenamedComponent } from './external-event/event-renamed/event-renamed.component';
import { externalEventProviders } from './external-event-providers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [EventRenamedComponent],
  entryComponents: [EventRenamedComponent],
  providers: [externalEventProviders]
})
export class ExternalEventRegistrationModule {}
