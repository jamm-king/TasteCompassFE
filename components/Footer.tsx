'use client';

export default function Footer() {
    return (
        <footer className="bg-brand-500 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} TasteCompass. All rights reserved.
            </div>
        </footer>
    );
}
