import './globals.css';

export const metadata = {
  title: 'Symplee',
  description: 'Designed By Fawad Ahmad',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
