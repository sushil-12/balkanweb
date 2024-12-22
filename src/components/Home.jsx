import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/style.css?ver=1.2" />
                <title>Balkan: Network for Digital Nomads</title>

                {/* Google Tag Manager */}
                <script
                    defer
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-Y9DJVCMWQN"
                ></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                          dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'G-Y9DJVCMWQN');
                    `}
                </script>
                <meta
                    name="description"
                    content="Balkan.org is a network for digital nomads, freelancers, and business owners, where progress, creativity, and collaboration come together."
                />
                <meta
                    name="keywords"
                    content="Balkan, digital nomads, freelancers, business network, collaboration, creativity"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Balkan: Network for Digital Nomads" />
                <meta
                    property="og:description"
                    content="Balkan.org is a network for digital nomads, freelancers, and business owners, where progress, creativity, and collaboration come together."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://balkan.org/" />
                <meta property="og:image" content="https://balkan.org/assets/logo.svg" />
                <meta property="og:image:alt" content="Balkan.org official logo" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Balkan: Network for Digital Nomads" />
                <meta
                    name="twitter:description"
                    content="Balkan.org is a network for digital nomads, freelancers, and business owners, where progress, creativity, and collaboration come together."
                />
                <meta name="twitter:image" content="https://balkan.org/assets/logo.svg" />
                <meta name="twitter:image:alt" content="Balkan.org official logo" />

                <link rel="preload" href="assets/logo.svg" as="image" />
                <link rel="canonical" href="https://balkan.org/" />

                {/* Fonts */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap"
                    media="print"
                    onLoad="this.media='all'"
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap"
                    />
                </noscript>

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

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "Balkan",
                          "url": "https://balkan.org",
                          "logo": "https://balkan.org/assets/logo.svg",
                          "foundingDate": "2024",
                          "founder": {
                            "@type": "Person",
                            "name": "Bruno Bruno",
                            "alternateName": "The Logician",
                            "url": "https://thelogician.com",
                            "sameAs": [
                              "https://www.linkedin.com/",
                              "https://www.crunchbase.com/",
                              "https://x.com/"
                            ]
                          },
                          "description": "Network for digital nomads, freelancers, and business owners, where progress, creativity, and collaboration come together."
                        }
                    `}
                </script>
            </head>
            <main className="container">
                <h1 className="heading">Balkan: Network for Digital Nomads</h1>
                <div>
                    <p className="text-balkan">
                        Welcome to Balkan.org, a network for digital nomads, freelancers,
                        and business owners, where progress, creativity, and collaboration
                        come together. Founded in 2024 by{" "}
                        <a href="https://thelogician.com">The Logician</a>, this network
                        connects individuals shaping the future of digital collaboration,
                        bringing together a community of shared vision.
                    </p>
                    <ul>
                        <li>1 Member</li>
                        <li>3 Groups</li>
                        <li>0 Events</li>
                        <li>1 Country</li>
                    </ul>
                    <p className="text-balkan">
                        Balkan.org connects like-minded individuals, providing a space where
                        integrity, creativity, and collaboration build connections that
                        drive mutual success and progress. Join to connect with those who
                        walk the same path. Freelancers meet freelancers, business owners
                        find peers, and C-level leaders engage on a whole new level.
                    </p>
                </div>
                <div className="text-right">
                    <p className="logo-text">
                        Logo:{" "}
                        <img
                            src={logo}
                            alt="Balkan.org official logo"
                            loading="lazy"
                            width="48"
                            height="48"
                        />
                    </p>
                </div>
                <footer>
                    <Link to="/policy">Disclaimer and Disclosure</Link>
                </footer>
            </main>
        </>
    );
};

export default Home;