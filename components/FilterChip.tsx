import { FC } from 'react';

type FilterChipProps = {
    label: string;
    weight: number;
    onClick: () => void;
};

const FilterChip: FC<FilterChipProps> = ({ label, weight, onClick }) => {
    const bgColor =
        weight === 1
            ? 'bg-brand-100 text-foreground border border-brand.DEFAULT'
            : weight === 2
                ? 'bg-brand-300 text-surface'
                : 'bg-brand-400 text-surface';

    return (
        <button
            onClick={onClick}
            className={`rounded-md px-3 py-1 text-sm transition ${bgColor}`}
        >
            {label}
        </button>
    );
};

export default FilterChip;