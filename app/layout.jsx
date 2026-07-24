import ThemeProvider from '../src/app/providers/ThemeProvider';
import MotionProvider from '../src/app/providers/MotionProvider';
import ScrollProgress from '../src/components/layout/ScrollProgress';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Usman Khalid | Full Stack Developer',
  description: 'Professional portfolio of Usman Khalid, a Full Stack Web Developer specializing in the MERN stack and Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <MotionProvider>
            <ScrollProgress />
            <div className="l-main">
              <Header />
              {children}
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
