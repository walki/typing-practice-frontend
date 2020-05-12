import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TypingStatsService {

  private currPage: string;

  constructor() { }

  pageCountEmitter = new Subject<number>();

  setPage(page: string){
    this.currPage = page;
    let standardWPMCount = this.currPage.length / 5;
    let wordSplitByBoundary = this.currPage.match(/\S+/g);

    this.pageCountEmitter.next(wordSplitByBoundary.length);

    console.log(`=`.repeat(20));
    console.log(`word count: ${standardWPMCount}`);
    console.log(this.currPage);
    console.log(wordSplitByBoundary);
  }

}
