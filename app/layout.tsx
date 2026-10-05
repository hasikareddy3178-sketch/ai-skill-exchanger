import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Skill Exchanger - Discover, Create & Share AI Workflows',
  description: 'Exchange Skills. Build Smarter with AI. Discover, create, share, and exchange useful AI skills and workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans antialiased flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
