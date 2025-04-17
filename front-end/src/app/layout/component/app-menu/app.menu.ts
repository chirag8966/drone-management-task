import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../app-menuitem/app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.html'
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Planning',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'Missions',
                        icon: 'pi pi-fw pi-map',
                        routerLink: ['/planning/empty']
                    },
                    {
                        label: 'Schedule',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['/planning/empty']
                    },
                ]
            },
            {
                label: 'Management',
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'Drones Inventory',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/planning/empty']
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: ['/planning'],
                items: [
                    {
                        label: 'All Flights',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['/planning/empty']
                    },
                    {
                        label: 'Survey Summaries',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/planning/empty']
                    },
                ]
            },
            {
                label: 'Wiki',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/chirag8966/flytBase-drone',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
