import { FC } from 'react';

interface Props {
    options: string[];
    selected: string[];
    onToggle: (filter: string) => void;
}

const FilterChips: FC<Props> = ({ options, selected, onToggle }) => (
    <div className="mt-4 flex justify-center flex-wrap gap-2">
        {options.map(opt => {
            const active = selected.includes(opt);
            return (
                <button
                    key={opt}
                    onClick={() => onToggle(opt)}
                    className={`rounded-md px-3 py-1 text-sm transition ${
                        active
                            ? 'bg-brand-400 text-surface'
                            : 'bg-brand-100 text-foreground border border-brand.DEFAULT'
                    }`}
                >
                    {opt}
                </button>
            );
        })}
    </div>
);

export default FilterChips;
