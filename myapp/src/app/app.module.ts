import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { DeptComponent } from './dept/dept.component';
import { LibComponent } from './lib/lib.component';
import { SportsComponent } from './sports/sports.component';
import { EceComponent } from './dept/ece/ece.component';
import { MechComponent } from './dept/mech/mech.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ArticleComponent,
    FooterComponent,
    DeptComponent,
    LibComponent,
    SportsComponent,
    EceComponent,
    MechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
