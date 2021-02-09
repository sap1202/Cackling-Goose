import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Cackling-Goose';
  cases = [];
  error = null;


  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:1337/cases');
      this.cases = response.data;
    } catch (error) {
      this.error = error;
    }
  }
}
