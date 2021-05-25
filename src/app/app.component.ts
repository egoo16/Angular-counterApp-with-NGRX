import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador = 0;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  incrementar(): void {
    this.store.dispatch(actions.incrementar());
  }

  decrementar(): void {
    this.store.dispatch(actions.decrementar());
  }
}
