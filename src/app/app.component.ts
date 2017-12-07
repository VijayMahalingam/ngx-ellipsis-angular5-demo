import { Component } from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resizeStyle: any = {
    left: `100px`,
    top: `100px`,
    width: `100px`,
    height: `100px`
  };

  onResizeEnd(event: ResizeEvent): void {
    this.resizeStyle = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
