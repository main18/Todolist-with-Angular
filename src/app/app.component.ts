import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('button') button : ElementRef;
  isOpened: boolean = false;

  open() {
    this.isOpened = !this.isOpened;
    this.button.nativeElement.style.display = "none";
  }
}
