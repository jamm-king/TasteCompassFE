'use client';

import { useRouter } from 'next/navigation';

interface KeywordTagsProps {
    tags: string[];
}

export default function KeywordTags({ tags }: KeywordTagsProps) {
    const router = useRouter();

    const handleClick = (tag: string) => {
        if (tag.trim()) {
            router.push(`/search?q=${encodeURIComponent(tag)}`);
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => handleClick(tag)}
                    className="px-3 py-1 bg-brand-400 text-brand-100 rounded-full hover:bg-brand-400/90 transition-colors"
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
