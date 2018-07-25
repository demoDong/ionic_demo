import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news';
import { JumpComponent } from './jump/jump';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
@NgModule({
	declarations: [NewsComponent,
		JumpComponent],
	imports: [],
	entryComponents: [NewsComponent],
	exports: [NewsComponent,
		JumpComponent]
})
export class ComponentsModule { }
