import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { APP_CONFIG, HERO_DI_CONFIG }    from './app.config';
import { UserService} from './user.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroListComponent
   ],
   providers: [
     UserService,
     { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
