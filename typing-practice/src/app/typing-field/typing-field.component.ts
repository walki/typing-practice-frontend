import { Component, OnInit } from '@angular/core';
import { TypingStatsService } from '../typing-stats.sevice';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-typing-field',
  templateUrl: './typing-field.component.html',
  styleUrls: ['./typing-field.component.css']
})
export class TypingFieldComponent implements OnInit {

  editorForm = new FormControl();

  constructor(private statService: TypingStatsService) { }

  ngOnInit(): void {
    this.editorForm.valueChanges.subscribe( ( value ) => {
      this.statService.pageEmitter.next(value);
    })
  }

}
