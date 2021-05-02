import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormationComponent } from './components/formation/formation.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NavBarComponent, FormationComponent, SkillsComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
