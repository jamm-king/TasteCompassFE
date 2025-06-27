// app/search/page.tsx
import { type Metadata } from 'next';
import ResultsGrid from '@/components/ResultsGrid';
import WeightControls from '@/components/WeightControls';
import { Restaurant } from '@/types/Restaurant';

export const metadata: Metadata = {
    title: '검색 결과 - TasteCompass',
};

const parseParam = (param: string | string[] | undefined, defaultValue: string): string =>
    Array.isArray(param) ? param[0] : param ?? defaultValue;

async function fetchSearchResults({
                                      q,
                                      page,
                                      tasteWeight,
                                      categoryWeight,
                                      moodWeight,
                                      filters,
                                  }: {
    q: string;
    page: number;
    tasteWeight: number;
    categoryWeight: number;
    moodWeight: number;
    filters: string[];
}): Promise<Restaurant[]> {
    const params = new URLSearchParams({
        q,
        page: String(page),
        tasteWeight: String(tasteWeight),
        categoryWeight: String(categoryWeight),
        moodWeight: String(moodWeight),
    });

    if (filters.length > 0) {
        params.append('filters', filters.join(','));
    }

    const res = await fetch(`${process.env.API_BASE_URL}/api/search?${params.toString()}`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error(`Search failed: ${res.statusText}`);
    return res.json();
}

export default async function SearchPage(props: any) {
    const searchParams = props.searchParams as Record<string, string | string[] | undefined>;

    const query = parseParam(searchParams.q, '');
    const page = parseInt(parseParam(searchParams.page, '1'), 10);
    const tasteWeight = parseFloat(parseParam(searchParams.tasteWeight, '1'));
    const categoryWeight = parseFloat(parseParam(searchParams.categoryWeight, '1'));
    const moodWeight = parseFloat(parseParam(searchParams.moodWeight, '1'));

    const filterRaw = parseParam(searchParams.filters, '');
    const filters = filterRaw.split(',').filter(Boolean);

    let restaurants: Restaurant[] = [];

    try {
        restaurants = await fetchSearchResults({
            q: query,
            page,
            tasteWeight,
            categoryWeight,
            moodWeight,
            filters,
        });
    } catch (e) {
        console.error('Search failed:', e);
    }

    return (
        <div className="px-6">
            <WeightControls />
            {restaurants.length === 0 ? (
                <p className="text-center text-gray-500 mt-8">검색 결과가 없습니다.</p>
            ) : (
                <ResultsGrid items={restaurants} />
            )}
        </div>
    );
}
