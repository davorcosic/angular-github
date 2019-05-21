import { Pipe, PipeTransform } from '@angular/core';

import { PeriodInMinutes } from './period-in-minutes.enum';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {
  transform(datePast: string, args?: any): string {
    const minutesAgo: number = this.getMinutesAgo(new Date(datePast));

    return this.getDisplayMessage(minutesAgo);
  }

  /**
   * Returns the difference in minutes between current and provided past datetime.
   *
   * @param datePast date and time in the past
   */
  private getMinutesAgo(datePast: Date): number {
    const minutesNow: number = +new Date() / (60 * 1000);
    const minutesPast: number = +datePast / (60 * 1000);

    return Math.floor(minutesNow - minutesPast);
  }

  /**
   * Returns message which shows how much time has passed since the provided past date.
   *
   * @param minutesAgo difference in minutes between current and provided past datetime
   */
  private getDisplayMessage(minutesAgo: number) {
    let periodsAgo: number;

    for (const period of Object.keys(PeriodInMinutes)) {
      periodsAgo = Math.floor(minutesAgo / PeriodInMinutes[period]);

      if (!periodsAgo) {
        continue;
      }

      if (periodsAgo && periodsAgo === 1) {
        return `${periodsAgo} ${period} ago`;
      } else {
        return `${periodsAgo} ${period}s ago`;
      }
    }

    return 'Just now';
  }
}
