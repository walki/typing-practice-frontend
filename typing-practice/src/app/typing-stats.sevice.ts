import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TypingStatsModel } from './models/typing-stats.model';

@Injectable({ providedIn: 'root' })
export class TypingStatsService {

  statsEmitter = new Subject<TypingStatsModel>();
  pageEmitter = new Subject<string>();
  timeStamps: number[] = [];

  constructor() {

    this.pageEmitter.subscribe((page: string) => {
      this.timeStamps.push(Date.now());

      let wordsSplitByBoundary = page.match(/\S+/g);

      this.statsEmitter.next({
        wordCount: wordsSplitByBoundary ? wordsSplitByBoundary.length : 0,
        wordsPerMinute: this.calculateWPM( page, this.getTotalTimeInMinutes(this.timeStamps, 2500))
      });

    });
  }

  calculateWPM(chaaracters : string, minutes: number) {
    const wordCount = chaaracters.length / 5;
    return wordCount / minutes;
  }

  getTotalTimeInMinutes(times: number[], gapSize) {
    if (times.length === 0)
      return 1;

    const startTime = times[0];
    const endTime = times[times.length - 1];

    // Finding any gaps that are larger than gapSize in milliseconds, to ignore them.
    const totalGapTime = times.reduce((acc, cur, idx, arr) => {
      if (idx > 0 && arr[idx] - arr[idx - 1] > gapSize) {
        acc += arr[idx] - arr[idx - 1];
      }
      return acc;
    }, 0);

    return (endTime - startTime - totalGapTime) / (1000 * 60);
  }

}
