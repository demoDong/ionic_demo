import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsComponent } from '../../components/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  componentName: any = NewsComponent;
  constructor(public navCtrl: NavController) {
  }

}
