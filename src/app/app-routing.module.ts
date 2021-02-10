import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDisplayComponent } from './main-display/main-display.component';
import { SurvivalPageComponent } from './pages/survival-page/survival-page.component';
import { EnvironmentPageComponent } from './pages/environment-page/environment-page.component';
import { PredatorPageComponent } from './pages/predator-page/predator-page.component';
import { TitleFontComponent } from './title-font/title-font.component';

const routes: Routes = [
  {
    path: '',
    component: TitleFontComponent
  },
  {
    path: 'home',
    component: MainDisplayComponent
  },
  {
    path: 'survival-page',
    component: SurvivalPageComponent
  },
  {
    path: 'environment-page',
    component: EnvironmentPageComponent
  },
  {
    path: 'predator-page',
    component: PredatorPageComponent
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
