import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypingStatsService } from '../typing-stats.sevice';


@Component({
  selector: 'app-current-stats',
  templateUrl: './current-stats.component.html',
  styleUrls: ['./current-stats.component.css']
})
export class CurrentStatsComponent implements OnInit, OnDestroy {

  wordCount : number;
  wordsPerMinute: number;

  constructor(private statsService: TypingStatsService) {
    this.wordCount = 0;
    this.wordsPerMinute = 0;
  }

  ngOnInit(): void {
    this.statsService.statsEmitter.subscribe((stats) => {
      this.wordCount = stats.wordCount;
      this.wordsPerMinute = stats.wordsPerMinute;
    });
  }

  ngOnDestroy(): void {
    this.statsService.statsEmitter.unsubscribe();
  }

}
