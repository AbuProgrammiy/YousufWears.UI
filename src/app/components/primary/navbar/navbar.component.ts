import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: false,
})
export class NavbarComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Asosiy',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                ],
            },
        ];
    }
}
