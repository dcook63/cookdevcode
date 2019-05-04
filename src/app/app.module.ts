import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutAlainaComponent } from './about-alaina/about-alaina.component';
import { AboutDanielComponent } from './about-daniel/about-daniel.component';
import { AboutCookDevComponent } from './about-cook-dev/about-cook-dev.component';
import { AlainaProjectsComponent } from './alaina-projects/alaina-projects.component';
import { DanielProjectsComponent } from './daniel-projects/daniel-projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'about-cookdev', component: AboutCookDevComponent },
  { path: 'alaina/about-alaina', component: AboutAlainaComponent },
  { path: 'alaina', component: HomeComponent },
  { path: 'alaina/projects', component: AlainaProjectsComponent },
  { path: 'daniel/about-daniel', component: AboutDanielComponent },
  { path: 'daniel', component: HomeComponent },
  { path: 'daniel/projects', component: DanielProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutAlainaComponent,
    AboutDanielComponent,
    AboutCookDevComponent,
    AlainaProjectsComponent,
    DanielProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

