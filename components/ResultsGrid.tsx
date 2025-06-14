import { FC } from 'react';
import { Restaurant } from '@/types/Restaurant'
import RestaurantCard from "@/components/RestaurantCard";

interface ResultsGridProps {
    items: Restaurant[];
    onSelect?: (id: string) => void;
}

const ResultsGrid: FC<ResultsGridProps> = ({ items, onSelect }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map(item => <RestaurantCard key={item.id} {...item} />)}
    </div>
);

export default ResultsGrid;
