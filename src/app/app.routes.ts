import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PlayLocal } from './pages/play-local/play-local';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    {
        path: "play/local",
        component: PlayLocal
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
