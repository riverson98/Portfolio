import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        
    },
    {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./components/about/aboutme.component').then(m => m.AboutmeComponent)
    },
    {
        path: 'skills',
        title: 'Skills',
        loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent)
    }
];
