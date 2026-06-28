import Script from 'next/script';
import '@/app/assets/css/all.scss';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import faviconSrc from '@/app/assets/images/oxvlo-favicon.png';

export const metadata = {
  title: { template: '%s | OXVLO', default: 'OXVLO' },
  description: 'Everything your business needs to exist online.',
  icons: { icon: faviconSrc.src },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-oxv-background text-oxv-text font-text antialiased">
        <div className="max-w-oxv-page mx-auto">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2LHEB46V3F" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2LHEB46V3F');
          `}
        </Script>
      </body>
    </html>
  );
}
