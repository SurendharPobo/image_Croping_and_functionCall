import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observable ' + VERSION.full;
  ngOnInit(): void {
    function firstFunction(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('First function complete');
          resolve();
        }, 6000);
      });
    }

    function secondFunction(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Second function complete');
          resolve();
        }, 4000);
      });
    }

    function thirdFunction(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Third function complete');
          resolve();
        }, 2000);
      });
    }

    // Call the functions one by one
    async function callFunctions() {
      await firstFunction();
      await secondFunction();
      await thirdFunction();
    }

    callFunctions()
      .then(() => {
        console.log('All functions completed');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  

}
