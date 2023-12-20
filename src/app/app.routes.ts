import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,data: { animation: 'home' } },
    { path: 'home', component: HomeComponent,data: { animation: 'home' } },
    { path: 'about', component: AboutComponent,data: { animation: 'about' } }

];
