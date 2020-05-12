import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypingStatsService } from '../typing-stats.sevice';

@Component({
  selector: 'app-current-stats',
  templateUrl: './current-stats.component.html',
  styleUrls: ['./current-stats.component.css']
})
export class CurrentStatsComponent implements OnInit, OnDestroy {

  wordCount : number;

  constructor(private statsService: TypingStatsService) {
    this.wordCount = 0;
  }

  ngOnInit(): void {
    this.statsService.pageCountEmitter.subscribe((pageCount) => {
      this.wordCount = pageCount;
    });
  }

  ngOnDestroy(): void {
    this.statsService.pageCountEmitter.unsubscribe();
  }

}
