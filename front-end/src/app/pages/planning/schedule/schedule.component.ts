import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit   {
  isStylesLoaded = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit(): void {
    this.loadStyle('syncfusion');
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `src/${styleName}.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `src/${styleName}.css`;
      style.type = 'text/css';
      head.appendChild(style);
    }
    setTimeout(() => {
      this.isStylesLoaded = true;
    }, 500);
  }
}
