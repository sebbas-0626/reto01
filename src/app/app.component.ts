import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// ciclo de vida de los componentes
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Barcelona', 'Madril', 'colombia']
  name!: string;
  selection!: string;
  title = 'reto01';
  url = 'https://storage-asset.msi.com/global/picture/news/2023/nb/mercedes-20230531-1.jpg'


  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }
  ngOnInit(): void {
    console.log('Oninit');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
  oncityCliked(city: string) {
    console.log('evnt=>', city);
    this.selection = city;
  }
  onClear(): void {
    this.selection = '';
  }
}

// logica
