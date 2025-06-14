import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko" className={"font-sans"}>
            <body className="bg-background">
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}
