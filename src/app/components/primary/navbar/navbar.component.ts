import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: false,
    styles: [
        ` .dock-window {
            width: 100%;
            height: 450px;
            position: relative;
            background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }

        .p-dock {
            z-index: 1000;
        }`
    ],
})
export class NavbarComponent {

    items: MenuItem[] | undefined;

    position: string = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
}
