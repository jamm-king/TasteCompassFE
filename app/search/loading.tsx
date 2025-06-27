// app/search/loading.tsx
export default function Loading() {
    return (
        <div className="px-6 mt-16 text-center text-gray-400">
            <p className="animate-pulse">식당을 탐색 중입니다…</p>
            <div className="mt-4 mx-auto w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
}
