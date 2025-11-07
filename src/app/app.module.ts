import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { DirectiveDirective } from './directive.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipe,
    DirectiveDirective,
    DirectiveDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
