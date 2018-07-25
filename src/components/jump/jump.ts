import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the JumpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jump',
  templateUrl: 'jump.html'
})
export class JumpComponent {
  text: string;
  @Input() componentName: any;

  constructor(private navCtrl: NavController) {
    console.log('Hello JumpComponent Component');
    this.text = 'Hello World';
  }
  jumpToNews() {
    this.navCtrl.push(this.componentName);
  }

}
