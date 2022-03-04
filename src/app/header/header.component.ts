import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() linkClicked = new EventEmitter<string>();
  collapsed = true;  

  onLinkClicked(feature: string) {
    this.linkClicked.emit(feature);
  }
}
