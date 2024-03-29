import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
})
export class GifsPageComponent {
  get gifsLength() {
    return !this.gifsService.gifs.length;
  }

  constructor(private gifsService: GifsService) {}
}
