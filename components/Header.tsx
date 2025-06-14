// components/Header.tsx
'use client';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

const Header: FC = () => {
    const router = useRouter();
    const [q, setQ] = useState('');

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(q)}`);
    };

    return (
        <header className="bg-brand-500 px-6 py-4 flex items-center">
            <Image
                src="/images/TasteCompassLogo.png"
                alt="TasteCompass"
                width={120}
                height={40}
            />

            <form onSubmit={onSearch} className="ml-6 flex-1 flex justify-center">
                <div className="relative max-w-md w-full">
                    <input
                        type="text"
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder="Search restaurants…"
                        className="w-full rounded-full bg-surface px-4 py-2 pr-10 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                        <Search className="w-5 h-5 text-foreground" />
                    </button>
                </div>
            </form>
        </header>
    );
};

export default Header;
