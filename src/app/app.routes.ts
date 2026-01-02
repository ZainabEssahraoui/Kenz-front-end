import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { HeaderPage } from './pages/header-page/header-page';
import { FooterPage } from './pages/footer-page/footer-page';

export const routes: Routes = [
        { path: '', component: HomePage,  pathMatch: 'full' },
        { path: 'header', component: HeaderPage, pathMatch: 'full' },
        { path: 'footer', component: FooterPage, pathMatch: 'full' },
        

];
