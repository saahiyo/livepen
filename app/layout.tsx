import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Livepen | Code Playground',
  description: 'Write HTML, CSS, and JS in a real-time environment',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalDefineProperty = Object.defineProperty;
                Object.defineProperty = function(obj, prop, descriptor) {
                  if ((obj === window || obj === globalThis) && prop === 'fetch' && descriptor && descriptor.get && !descriptor.set) {
                    const originalGet = descriptor.get;
                    let customValue = undefined;
                    let isOverridden = false;
                    descriptor.get = function() {
                      return isOverridden ? customValue : originalGet.call(this);
                    };
                    descriptor.set = function(newVal) {
                      isOverridden = true;
                      customValue = newVal;
                    };
                    descriptor.configurable = true;
                  }
                  return originalDefineProperty.call(Object, obj, prop, descriptor);
                };
              }
            `
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" storageKey="livepen-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
