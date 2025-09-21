import { notFound } from 'next/navigation';
import MainHeader from '../components/main-header/main-header';
import MainHeaderBackground from '../components/main-header/main-header-background';
import { getMeal } from '../lib/meals';
import './globals.css';

export async function generateMetadata({params}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  
  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
