import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabbedViewerComponent } from './tabbed-viewer/tabbed-viewer.component';

import { TitleFontComponent } from './title-font/title-font.component';
import { SurvivalPageComponent } from './pages/survival-page/survival-page.component';
import { EnvironmentPageComponent } from './pages/environment-page/environment-page.component';
import { PredatorPageComponent } from './pages/predator-page/predator-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    TopBarComponent,
    TabbedViewerComponent,
    TitleFontComponent,
    SurvivalPageComponent,
    EnvironmentPageComponent,
    PredatorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
