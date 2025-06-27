import KeywordTags from '@/components/KeywordTags';
import RecentRestaurants from '@/components/RecentRestaurants';

export default function Home() {
    const popularTags = ['한식', '카페', '중식', '일식', '양식', '분위기', '데이트'];

    return (
        <main className="max-w-3xl mx-auto p-4 space-y-8">
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand-500">인기 키워드</h2>
                <KeywordTags tags={popularTags} />
            </section>

            <RecentRestaurants />
        </main>
    );
}
