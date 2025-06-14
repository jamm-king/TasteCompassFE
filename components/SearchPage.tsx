'use client';

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import FilterChips from './FilterChips';
import Pagination from './Pagination';
import { Restaurant } from '@/types/Restaurant';
import ResultsGrid from './ResultsGrid';

const filterOptions = ['Open Now', 'Outdoor Seating', 'Vegan'];

const SearchPage: FC = () => {
    const params = useSearchParams();
    const query = params.get('q') ?? '';
    const [results, setResults] = useState<Restaurant[]>([]);
    const [filters, setFilters] = useState<string[]>([]);
    const [page, setPage] = useState(1);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const urlParams = new URLSearchParams({
            q: query,
            page: String(page),
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
                console.error('검색 API 에러:', e);
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query, filters, page]);

    const toggleFilter = (f: string) =>
        setFilters((prev) =>
            prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
        );

    return (
        <div className="px-6">
            <FilterChips options={filterOptions} selected={filters} onToggle={toggleFilter} />

            {isLoading && <p>Loading…</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!isLoading && !error && (
                <>
                    <ResultsGrid items={results} onSelect={(id) => console.log('go to', id)} />
                    {/*<Pagination current={page} total={5 onPageChange={setPage} />*/}
                </>
            )}
        </div>
    );
};

export default SearchPage;
