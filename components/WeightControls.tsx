'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import FilterChip from './FilterChip';

const MAX_WEIGHT = 3;

export default function WeightControls() {
    const router = useRouter();
    const params = useSearchParams();

    const tasteWeight = parseInt(params.get('tasteWeight') ?? '1');
    const categoryWeight = parseInt(params.get('categoryWeight') ?? '1');
    const moodWeight = parseInt(params.get('moodWeight') ?? '1');
    const query = params.get('q') ?? '';

    const updateParam = (key: string, value: number) => {
        const newParams = new URLSearchParams(params.toString());
        newParams.set(key, String(value));
        router.push(`/search?${newParams.toString()}`);
    };

    return (
        <div className="mt-4 mb-4 flex justify-center flex-wrap gap-2">
            <FilterChip
                label="맛"
                weight={tasteWeight}
                onClick={() => updateParam('tasteWeight', tasteWeight >= MAX_WEIGHT ? 1 : tasteWeight + 1)}
            />
            <FilterChip
                label="카테고리"
                weight={categoryWeight}
                onClick={() => updateParam('categoryWeight', categoryWeight >= MAX_WEIGHT ? 1 : categoryWeight + 1)}
            />
            <FilterChip
                label="분위기"
                weight={moodWeight}
                onClick={() => updateParam('moodWeight', moodWeight >= MAX_WEIGHT ? 1 : moodWeight + 1)}
            />
        </div>
    );
}
