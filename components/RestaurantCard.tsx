// components/RestaurantCard.tsx
'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Wifi, Car } from 'lucide-react';
import { Restaurant } from '@/types/Restaurant';
import { saveRecentRestaurant } from '@/utils/recentRestaurants';

const PRICE_FORMATTER = new Intl.NumberFormat('ko-KR');

const RestaurantCard: FC<Restaurant> = ({
                                            id,
                                            name,
                                            address,
                                            category,
                                            phone,
                                            businessDays,
                                            hasWifi,
                                            hasParking,
                                            menus,
                                            minPrice,
                                            maxPrice,
                                            taste,
                                            mood,
                                        }) => {
    const priceText =
        minPrice && maxPrice
            ? `${PRICE_FORMATTER.format(minPrice)}–${PRICE_FORMATTER.format(maxPrice)}원`
            : undefined;

    return (
        <Link
            href={`/restaurant/${id}`}
            onClick={() => saveRecentRestaurant({
                id,
                name,
                address,
                category,
                phone,
                businessDays,
                hasWifi,
                hasParking,
                menus,
                minPrice,
                maxPrice,
                taste,
                mood
            })}
            className="block bg-surface rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
        >

        <div className="flex space-x-4">
                <div className="flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
                        {category && (
                            <p className="text-sm text-gray-500 mb-1 capitalize">{category}</p>
                        )}
                        <p className="text-sm text-gray-600 mb-2">{address}</p>
                    </div>

                    <div className="items-center text-sm text-gray-500">
                        {phone && (<span className="flex items-center py-0.5">{phone}</span>)}
                        {businessDays && <span className="flex items-center py-0.5">{businessDays}</span>}
                        {priceText && <span className="flex items-center py-0.5">{priceText}</span>}
                        <div className="flex flex-wrap gap-2">
                            {hasWifi && (
                                <span className="flex items-center py-0.5">
                                    <Wifi className="w-4 h-4 mr-1 text-foreground" /> Wi-Fi
                                </span>
                            )}
                            {hasParking && (
                                <span className="flex items-center py-0.5">
                                    <Car className="w-4 h-4 mr-1 text-foreground" /> Parking
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-between">
                <div className="mt-1 flex">
                    {menus && menus.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {menus.slice(0, 3).map((menuItem) => (
                                <span
                                    key={menuItem.name}
                                    className="bg-brand-100 text-foreground text-xs px-2 py-1 rounded"
                                >
                                    {menuItem.name}
                                </span>
                            ))}
                            {menus.length > 3 && (
                                <span className="text-xs text-gray-500 px-2 py-1">…</span>
                            )}
                        </div>
                    )}
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                    {taste && (
                        <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded">
                            맛: {taste}
                        </span>
                    )}
                    {mood && (
                        <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded">
                            분위기: {mood}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
