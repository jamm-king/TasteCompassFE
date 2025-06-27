'use client';

import { FC, Suspense } from 'react';
import SearchClient from './SearchClient';

const SearchPage: FC = () => {
    return (
        <Suspense fallback={<div>Loading search...</div>}>
            <SearchClient />
        </Suspense>
    );
};

export default SearchPage;
