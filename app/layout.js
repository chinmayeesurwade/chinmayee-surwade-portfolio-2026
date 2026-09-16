import './globals.css';

export const metadata = {
  title: 'Chinmayee Surwade | Business Analyst & Data Analyst',
  description: 'Business Analyst and Data Analyst portfolio covering banking, trade finance, analytics, process improvement and AI automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
