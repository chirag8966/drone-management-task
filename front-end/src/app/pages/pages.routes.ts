import { Routes } from '@angular/router';

export default [
    { path: 'missions', loadComponent: () => import('./planning/missions/missions.component').then(m => m.MissionsComponent) },
    { path: 'schedule', loadChildren: () => import('./planning/schedule/schedule-module.module').then(s => s.ScheduleModuleModule) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
