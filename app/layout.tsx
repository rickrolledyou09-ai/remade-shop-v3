import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReMade Shop - Personalized Tote Bags',
  description: 'Hand-sewn one-of-a-kind tote bags made from upcycled fabric. Old fabric. New life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <h1>ReMade</h1>
            <p className="tagline">old fabric. new life</p>
            <nav>
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2026 ReMade. Hand-sewn with love.</p>
        </footer>
      </body>
    </html>
  );
}
