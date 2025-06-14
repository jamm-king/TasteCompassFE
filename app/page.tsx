'use client'

import { useRouter } from 'next/navigation';
import KeywordTags from '../components/KeywordTags';
import RestaurantCard from '../components/RestaurantCard';
import { mockData } from '@/data/MockRestaurants'

export default function Home() {
    const router = useRouter();
    const popularTags = ['한식', '카페', '중식', '일식', '양식', '분위기', '데이트'];

    const handleSearch = (q: string) => {
        if (q.trim()) router.push(`/search?q=${encodeURIComponent(q)}`);
    };
    const handleTagClick = (tag: string) => handleSearch(tag);

    return (
        <main className="max-w-3xl mx-auto p-4 space-y-8">
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand-500">인기 키워드</h2>
                <KeywordTags tags={popularTags} onClick={handleTagClick} />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand-500">최근 본 식당</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockData.map(r => (
                        <RestaurantCard key={r.id} {...r} />
                    ))}
                </div>
            </section>
        </main>
    );
}