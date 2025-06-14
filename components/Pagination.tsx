import { FC } from 'react';

interface PaginationProps {
    current: number;
    total: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ current, total, onPageChange }) => (
    <div className="flex justify-center items-center mt-8 mb-5 space-x-2">
        <button
            onClick={() => onPageChange(current - 1)}
            disabled={current <= 1}
            className="px-4 py-2 rounded-full bg-surface hover:bg-brand-300 hover:text-surface transition-colors"
        >
            Prev
        </button>
        <span className="px-4 py-2 font-medium bg-brand-400 text-surface rounded-lg">
            {current}
        </span>
        <button
            onClick={() => onPageChange(current + 1)}
            disabled={current >= total}
            className="px-4 py-2 rounded-full bg-surface hover:bg-brand-300 hover:text-surface transition-colors"
        >
            Next
        </button>
    </div>
);

export default Pagination;
