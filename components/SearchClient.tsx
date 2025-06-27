'use client';

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import FilterChip from './FilterChip';
import { Restaurant } from '@/types/Restaurant';
import ResultsGrid from './ResultsGrid';

const SearchClient: FC = () => {
    const params = useSearchParams();
    const query = params.get('q') ?? '';

    const [results, setResults] = useState<Restaurant[]>([]);
    const [filters, setFilters] = useState<string[]>([]);
    const [page, setPage] = useState(1);

    const [tasteWeight, setTasteWeight] = useState(1);
    const [categoryWeight, setCategoryWeight] = useState(1);
    const [moodWeight, setMoodWeight] = useState(1);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const urlParams = new URLSearchParams({
            q: query,
            page: String(page),
            tasteWeight: String(tasteWeight),
            categoryWeight: String(categoryWeight),
            moodWeight: String(moodWeight),
        });

        if (filters.length > 0) {
            urlParams.append('filters', filters.join(','));
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/search?${urlParams.toString()}`, {
                    method: 'GET',
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const data: Restaurant[] = await res.json();
                setResults(data);
            } catch (e: any) {
                console.error('Search API Error:', e);
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query, filters, page, tasteWeight, categoryWeight, moodWeight]);

    const toggleFilter = (f: string) =>
        setFilters((prev) =>
            prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
        );

    const handleTasteClick = () =>
        setTasteWeight((prev) => (prev >= 3 ? 1 : prev + 1));
    const handleCategoryClick = () =>
        setCategoryWeight((prev) => (prev >= 3 ? 1 : prev + 1));
    const handleMoodClick = () =>
        setMoodWeight((prev) => (prev >= 3 ? 1 : prev + 1));

    return (
        <div className="px-6">
            <div className="mt-4 mb-4 flex justify-center flex-wrap gap-2">
                <FilterChip label="맛" weight={tasteWeight} onClick={handleTasteClick} />
                <FilterChip label="카테고리" weight={categoryWeight} onClick={handleCategoryClick} />
                <FilterChip label="분위기" weight={moodWeight} onClick={handleMoodClick} />
            </div>

            {error && <p className="text-red-500">Error: {error}</p>}

            {!isLoading && !error && (
                <ResultsGrid items={results} onSelect={(id) => console.log('go to', id)} />
            )}
        </div>
    );
};

export default SearchClient;
