import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <path d="M23.957031 2 A 1.50015 1.50015 0 0 0 23.318359 2.1640625L5.8183594 11.076172 A 1.50015 1.50015 0 0 0 5 12.412109L5 33.201172 A 1.50015 1.50015 0 0 0 5.6855469 34.462891L23.185547 45.759766 A 1.50015 1.50015 0 0 0 24.814453 45.759766L42.314453 34.462891 A 1.50015 1.50015 0 0 0 43 33.201172L43 12.412109 A 1.50015 1.50015 0 0 0 42.181641 11.076172L24.681641 2.1640625 A 1.50015 1.50015 0 0 0 23.957031 2 z M 24 5.1835938L38.416016 12.525391L33.378906 15.572266L24.679688 11.142578 A 1.50015 1.50015 0 0 0 23.957031 10.980469 A 1.50015 1.50015 0 0 0 23.318359 11.142578L14.621094 15.572266L9.5839844 12.525391L24 5.1835938 z M 24 14.162109L30.357422 17.400391L24 21.246094L17.642578 17.400391L24 14.162109 z M 8 15.074219L13 18.099609L13 28.845703 A 1.50015 1.50015 0 0 0 13.685547 30.105469L22.5 35.794922L22.5 41.746094L8 32.384766L8 15.074219 z M 40 15.074219L40 32.384766L25.5 41.746094L25.5 35.794922L34.314453 30.105469 A 1.50015 1.50015 0 0 0 35 28.845703L35 18.099609L40 15.074219 z M 16 19.914062L22.5 23.845703L22.5 32.224609L16 28.027344L16 19.914062 z M 32 19.914062L32 28.027344L25.5 32.224609L25.5 23.845703L32 19.914062 z" fill="currentColor" />
  </svg>
);

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
};

export default {
  projectLink: "https://github.com/smultar/risk-of-rain.docs",
  docsRepositoryBase: "https://github.com/smultar/risk-of-rain.docs/blob/master/pages",
  titleSuffix: " – Risk of Mods",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => { const { locale } = useRouter();
    return ( FEEDBACK_LINK_WITH_TRANSLATIONS[locale] || FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"] );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={0} />
        <span className="mx-2 font-extrabold hidden md:inline select-none">Risk of Mods</span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const OpenGraphImage = meta.image || 'https://riskofrain.docs.smultron.com/og.png';

    return (
      <>
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={ meta.description || "Risk of modding is a documentation website, where you can discover up-to-date guides and resources for modding in Risk of Rain 2." }/>
        <meta name="og:description" content={ meta.description || "Risk of modding is a documentation website, where you can discover up-to-date guides and resources for modding in Risk of Rain 2." } />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smuItar" />
        <meta name="twitter:image" content={ OpenGraphImage } />
        <meta name="og:title" content={ title ? title + " – Risk of Modding" : "Risk of Modding: Documentation" }/>
        <meta name="og:image" content={ OpenGraphImage } />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "fr":
        return "在 GitHub 上编辑本页 →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      default:
        return (
          <>
            <span className="mr-1">Based on</span>
            <a href="https://vercel.com/?utm_source=swr" target="_blank" rel="noopener" className="inline-flex items-center no-underline text-current font-semibold">
              <span className="mr-1">Nextra</span>
            </a>
              <span className="mr-1">and Maintained by</span>
            <a href="https://status.smultar.com" target="_blank" rel="noopener" className="inline-flex items-center justify-center no-underline text-current font-semibold">
              <span className="mr-1">Smultar</span>
            </a>
          </>
        );
    }
  },

  // Language Switcher
  i18n: [
    { locale: "en-US", text: "English" }
  ],
};
