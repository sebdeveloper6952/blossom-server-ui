export interface NavigationItem {
    id: number;
    path: string;
    name: string;
    icon: string;
    mobile: boolean;
}

export const navigationItems: NavigationItem[] = [
    { id: 0, path: '/', name: 'Home', icon: 'system-uicons:home', mobile: true },
    { id: 1, path: '/stats', name: 'Stats', icon: 'system-uicons:home', mobile: true }
];
