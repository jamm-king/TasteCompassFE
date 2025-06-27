'use client';

import { useEffect, useState } from 'react';
import { Restaurant } from '@/types/Restaurant';
import { getRecentRestaurants } from '@/utils/recentRestaurants';
import ResultsGrid from './ResultsGrid';

export default function RecentRestaurants() {
    const [recent, setRecent] = useState<Restaurant[]>([]);

    useEffect(() => {
        const list = getRecentRestaurants();
        setRecent(list);
    }, []);

    if (recent.length === 0) return null;

    return (
        <section className="space-y-4 mt-6">
            <h2 className="text-2xl font-semibold text-brand-500">최근 본 식당</h2>
            <ResultsGrid items={recent} />
        </section>
    );
}
