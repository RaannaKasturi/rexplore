import type { Metadata } from 'next';
import { Syne } from 'next/font/google'
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/static/header';
import Test from './test';

const fontNormal = Syne({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Project Gatekeeper',
  description: 'Free SSL for All',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontNormal.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={true}
        >
          < Test />
          < Header />
          {children}
          <div className="h-lvh"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
