import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { RegisterComponent } from './register/register.component';

import { TrainerService } from './trainer.service';
import { HttpModule } from '@angular/http';

import { routing }        from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        TrainerListComponent,
        TrainerDetailComponent,
        RegisterComponent
    ],
    providers: [
      TrainerService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
