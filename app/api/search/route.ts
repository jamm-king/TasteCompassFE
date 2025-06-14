import { NextResponse } from 'next/server';

const BACKEND = process.env.TASTECOMPASS_BACKEND_URL;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') ?? '';
    const filters = searchParams.get('filters') ?? '';
    const page = searchParams.get('page') ?? '1';

    try {
        const res = await fetch(
            `${BACKEND}/api/search?q=${encodeURIComponent(q)}&filters=${encodeURIComponent(filters)}&page=${page}`,
            { next: { revalidate: 0 } }
        );

        if (!res.ok) {
            return NextResponse.json(
                { error: `Backend returned ${res.status}` },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (e: any) {
        console.error('API Proxy Error:', e);
        return NextResponse.json(
            { error: e.message || 'Unknown error' },
            { status: 500 }
        );
    }
}
