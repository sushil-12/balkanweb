import React from 'react';

const Policy = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../style.css?ver=1.2" />
        <title>Balkan: Disclaimer and Disclosure</title>
        <meta
          name="description"
          content="Policy page for Balkan.org, outlining disclaimer, privacy practices, data usage, and third-party tool policies."
        />
        <meta
          name="keywords"
          content="Balkan, digital nomads, policy, disclaimer, disclosure, privacy practices"
        />
        <link rel="canonical" href="https://balkan.org/policy/" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9DJVCMWQN"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y9DJVCMWQN');
          `}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Policy Page",
              "url": "https://balkan.org/policy",
              "description": "Policy page for Balkan.org, outlining disclaimer, privacy practices, data usage, and third-party tool policies.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Balkan",
                    "item": "https://balkan.org"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Disclaimer and Disclosure",
                    "item": "https://balkan.org/policy"
                  }
                ]
              }
            }
          `}
        </script>
      </head>
      <body>
        <main className="container">
          <div>
            <h1 className="heading">Balkan: Disclaimer and Disclosure</h1>
            <p className="balkan-text">
              Balkan.org is an independent private network created by The
              Logician with the purpose of connecting digital nomads,
              freelancers, and business owners through integrity, creativity,
              and collaboration, while holding no responsibility for
              interactions or outcomes between members within the network.
            </p>
            <p className="balkan-text">
              Balkan.org operates as a simple HTML platform with SEO
              optimizations, designed purely for informational and networking
              purposes. To monitor site traffic and improve performance, we use
              Google Analytics for visitor insights and Cloudflare, a
              third-party content delivery network (CDN), for enhanced speed
              and caching. Importantly, we do not collect, store, or process
              any personal data or contact information. There are no public
              email addresses or forms.
            </p>
            <p className="balkan-text">
              Please note that communication and group functionalities for
              Balkan.org are not hosted directly on this website. Instead, they
              are managed through an external third-party tool where all
              interactions and organization of group activities take place.
              This third-party tool operates independently from Balkan.org, and
              all interactions or exchanges within it are solely the
              responsibility of the participants involved.
            </p>
            <p className="balkan-text">
              Please be aware that Balkan.org contains hyperlinks directing
              users to <a href="https://thelogician.com/">The Logician’s
              official site.</a> These links are provided for additional
              information and contact purposes. However, once you leave this
              website, Balkan.org holds no responsibility for the privacy
              policies, practices, or content of any third-party sites,
              including The Logician’s site.
            </p>
            <p className="balkan-text updated-on">
              Updated on November 7, 2024, for the latest information.
            </p>
          </div>
          <footer>
            <a href="/">Network for Digital Nomads</a>
          </footer>
        </main>
      </body>
    </>
  );
};

export default Policy;