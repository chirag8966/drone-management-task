import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Interface for stats widget data
 */
export interface StatWidget {
    name: string;
    count: string | number;
    icon: string;
    color: string;
    highlight: string;
    description: string;
}

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    templateUrl: 'statswidget.component.html',
    styleUrls: ['statswidget.component.scss']
})
export class StatsWidget {
    statsWidgets: StatWidget[] = [
        {
            name: 'Total Drones',
            count: 350,
            icon: 'pi pi-sort-alt-slash',
            color: 'cyan',
            highlight: '24 new',
            description: 'since last week'
        },
        {
            name: 'On field',
            count: 263,
            icon: 'pi pi-map-marker',
            color: 'green',
            highlight: '%20+',
            description: 'since last week'
        },
        {
            name: 'Need Approval',
            count: 13,
            icon: 'pi pi-check-square',
            color: 'blue',
            highlight: '3',
            description: 'new missions added'
        },
        {
            name: 'Service Required',
            count: 12,
            icon: 'pi pi-wrench',
            color: 'orange',
            highlight: '3',
            description: 'Critical'
        }
    ];
}
