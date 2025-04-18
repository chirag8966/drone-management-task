import { Component, inject } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-recent-missions',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Recent Missions</div>
        <p-table [value]="products" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Image</th>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="location">Location <p-sortIcon field="location"></p-sortIcon></th>
                    <th pSortableColumn="price">Battery <p-sortIcon field="price"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img src="https://primefaces.org/cdn/primevue/images/product/{{ product.image }}" class="shadow-lg" alt="{{ product.name }}" width="50" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.name }}</td>
                    <td style="width: 25%; min-width: 7rem;">{{ product.location || 'Symbiosis' }}</td>
                    <td style="width: 25%; min-width: 8rem;">{{ product.price | currency: 'INR' }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only" (click)="navigateToField(product)" ></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
})
export class RecentMissions {
    products: {id: string, name: string, location: string, price: number}[] = [];
    router = inject(Router)

    ngOnInit() {
        this.products = [
            {
                id: '1',
                name: 'Field 1',
                location: 'Location 1',
                price: 100
            },
            {
                id: '2',
                name: 'Field 2',
                location: 'Location 2',
                price: 200
            },
            {
                id: '3',
                name: 'Field 3',
                location: 'Location 3',
                price: 300
            }
        ];
    }

    navigateToField(product: {id: string, name: string, location: string, price: number}) {
        this.router.navigate(['/management/field'], {
            queryParams: { id: product.id }
        });
    }
}
