import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TypingStatsModel } from './models/typing-stats.model';

@Injectable({providedIn: 'root'})
export class TypingStatsService {

  private currPage: string;

  constructor() { }

  statsEmitter = new Subject<TypingStatsModel>();

  timeStamps = [];

  setPage(page: string){
    this.timeStamps.push(Date.now());

    this.currPage = page;
    let wordsSplitByBoundary = this.currPage.match(/\S+/g);

    this.statsEmitter.next({
      wordCount: wordsSplitByBoundary ? wordsSplitByBoundary.length : 0,
      wordsPerMinute: this.calculateWPM()
    });
  }

  calculateWPM(){
    const wordCount = this.currPage.length / 5;
    return wordCount / this.getTotalTimeInMinutes();
  }

  getTotalTimeInMinutes() {
    if (this.timeStamps.length === 0)
      return 1;

    const startTime = this.timeStamps[0];
    const endTime = this.timeStamps[this.timeStamps.length - 1];

    // Finding any gaps that are larger than 2.5 seconds, to ignore them.
    const totalGapTime = this.timeStamps.reduce( (acc, cur, idx, arr) => {
      if (idx > 0 && arr[idx] - arr[idx - 1] > 2500){
        acc += arr[idx] - arr[idx - 1];
      }
      return acc;
    }, 0);

    console.log(totalGapTime);

    return (endTime - startTime - totalGapTime) / (1000 * 60);
  }

}
