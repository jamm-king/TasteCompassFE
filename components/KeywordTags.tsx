'use client';

interface KeywordTagsProps {
    tags: string[];
    onClick: (tag: string) => void;
}

export default function KeywordTags({ tags, onClick }: KeywordTagsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => onClick(tag)}
                    className="px-3 py-1 bg-brand-400 text-brand-100 rounded-full hover:bg-brand-400/90 transition-colors"
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}