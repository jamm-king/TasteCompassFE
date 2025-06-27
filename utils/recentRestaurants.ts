// utils/recentRestaurants.ts

import { Restaurant } from '@/types/Restaurant';

const STORAGE_KEY = 'recentRestaurants';
const MAX_ITEMS = 5;

export function saveRecentRestaurant(restaurant: Restaurant) {
    if (typeof window === 'undefined') return;

    const raw = localStorage.getItem(STORAGE_KEY);
    const existing: Restaurant[] = raw ? JSON.parse(raw) : [];

    const filtered = existing.filter(r => r.id !== restaurant.id);
    const updated = [restaurant, ...filtered].slice(0, MAX_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getRecentRestaurants(): Restaurant[] {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}
