import { Routes } from '@angular/router';

export default [
    { path: 'missions', loadComponent: () => import('./planning/missions/missions.component').then(m => m.MissionsComponent) },
    { path: 'schedule', loadComponent: () => import('./planning/schedule/schedule.component').then(s => s.ScheduleComponent) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
