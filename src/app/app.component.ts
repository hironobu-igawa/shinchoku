import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * 問い掛け
   */
  public question = 1;

  ngOnInit(): void {
    Observable
      .interval(1000)
      .subscribe(() => this.changeQuestion());
  }

  /**
   * 問い掛けを変更する。
   */
  private changeQuestion(): void {
    const getQ = () => Math.ceil(Math.random() * 4);

    let question = getQ();
    while (this.question === question) {
      question = getQ();
    }

    this.question = question;
  }
}
