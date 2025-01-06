import type { Metadata } from 'next';
import { Syne } from 'next/font/google'
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/static/header';

const fontNormal = Syne({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'ReXplore',
  description: 'Science Simplified, Knowledge Amplified',
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
          < Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
