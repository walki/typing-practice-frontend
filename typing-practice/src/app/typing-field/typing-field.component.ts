import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TypingStatsService } from '../typing-stats.sevice';

@Component({
  selector: 'app-typing-field',
  templateUrl: './typing-field.component.html',
  styleUrls: ['./typing-field.component.css']
})
export class TypingFieldComponent implements OnInit {

  @ViewChild("editor") editorView: ElementRef;

  @HostListener('window:keyup', ['$event']) updateEditor(event: KeyboardEvent) {
    const editorValue = this.editorView.nativeElement.innerText;
    console.log(editorValue);
    this.statService.setPage(editorValue);
  }

  constructor(private statService: TypingStatsService) { }

  ngOnInit(): void {

  }

}
