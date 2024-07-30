import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./components/pages/home/home.component').then(m => m.HomeComponent),
        
    },
    {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./components/pages/about/aboutme.component').then(m => m.AboutmeComponent),
    },
    {
        path: 'skills',
        title: 'Skills',
        loadComponent: () => import('./components/pages/skills/skills.component').then(m => m.SkillsComponent),
    },
    {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./components/pages/projects/projects.component').then(m => m.ProjectsComponent),
    }
];
