import { FinishReveal } from "../components/FinishReveal";
import { ProjectConsole } from "../components/ProjectConsole";
import { siteConfig } from "../config/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  telephone: siteConfig.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.postalCode,
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.reviewCount,
  },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sam's Boat Repair home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>SAM&apos;S <small>BOAT REPAIR</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#craft">Craft</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-call" href={siteConfig.phoneHref}>CALL SAM ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="hero-kicker"><span>5.0 ★ / {siteConfig.reviewCount} REVIEWS</span><span>BACLIFF, TEXAS</span></div>
          <h1>
            DAMAGE
            <span>DISAPPEARS.</span>
            <em>Craftsmanship doesn&apos;t.</em>
          </h1>
          <p>
            Fiberglass, gelcoat and finish-focused marine repair for boat owners who care what the finished work looks like.
          </p>
          <div className="hero-actions">
            <a className="button button-coral" href="#project">START A PROJECT</a>
            <a className="text-link" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay} <span>↗</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract marine repair illustration">
          <div className="scan-label">SURFACE / FINISH / RESTORE</div>
          <div className="boat-shadow" />
          <div className="boat-shell">
            <div className="boat-top" />
            <div className="boat-window" />
            <div className="boat-hull">
              <div className="repair-zone"><span>REPAIR ZONE</span></div>
              <div className="scan-beam" />
            </div>
          </div>
          <div className="water-lines"><i /><i /><i /></div>
          <div className="art-spec spec-a">FIBERGLASS<br />01</div>
          <div className="art-spec spec-b">GELCOAT<br />02</div>
          <div className="art-spec spec-c">FINISH<br />03</div>
        </div>

        <div className="hero-bottom">
          <span>1121 GRAND AVE · BACLIFF</span>
          <span className="pulse-dot">CRAFT OVER COVER-UP</span>
          <span>SCROLL TO INSPECT ↓</span>
        </div>
      </section>

      <section className="statement" id="craft">
        <div className="statement-index">01 / THE STANDARD</div>
        <div className="statement-copy">
          <p className="eyebrow">THE REPAIR SHOULD STOP LOOKING LIKE A REPAIR.</p>
          <h2>Make the damage <span>hard to find.</span></h2>
          <p className="lede">
            Customers repeatedly praise Sam&apos;s finish quality, clear communication, and work that visually blends back into the boat instead of calling attention to itself.
          </p>
        </div>
        <div className="ring-stack" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>

      <section className="reveal-section">
        <FinishReveal />
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <span className="eyebrow">02 / CAPABILITIES</span>
          <h2>Built around the <em>finish.</em></h2>
        </div>
        <div className="service-list">
          {siteConfig.services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#project" aria-label={`Start a ${service.title} project`}>PROJECT ↘</a>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee" aria-label="Customer review themes">
        <div className="marquee-track">
          {[...siteConfig.reviewThemes, ...siteConfig.reviewThemes].map((theme, index) => (
            <span key={`${theme}-${index}`}>✦ {theme}</span>
          ))}
        </div>
      </section>

      <section className="precision">
        <div className="precision-visual" aria-hidden="true">
          <div className="grid-lines" />
          <div className="target target-a" />
          <div className="target target-b" />
          <div className="hull-curve" />
          <span className="coord c1">29.506°N</span>
          <span className="coord c2">95.005°W</span>
          <span className="coord c3">FINISH MATCH</span>
        </div>
        <div className="precision-copy">
          <span className="eyebrow">03 / WHY PEOPLE NOTICE</span>
          <h2>The last 10% is the part everyone sees.</h2>
          <p>
            Fiberglass work is structural, but finish work is visual. The strongest public feedback around Sam&apos;s shop keeps coming back to how clean the result looks, how well expectations are explained, and how consistently customers stay informed.
          </p>
          <div className="proof-grid">
            <div><b>5.0</b><span>Google rating</span></div>
            <div><b>{siteConfig.reviewCount}</b><span>public reviews</span></div>
            <div><b>PHOTO</b><span>updates praised</span></div>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-heading light">
          <span className="eyebrow">04 / THE HANDOFF</span>
          <h2>Bring the problem.<br /><em>Leave with the boat.</em></h2>
        </div>
        <div className="process-line" aria-hidden="true"><span /></div>
        <div className="process-grid">
          <article><b>01</b><h3>Show Sam what happened.</h3><p>Call with the project and damage details. Photos may help explain it; confirm the preferred photo workflow when you connect.</p></article>
          <article><b>02</b><h3>Get clear on the repair.</h3><p>Reviews consistently mention straightforward communication and expectation-setting before and during the work.</p></article>
          <article><b>03</b><h3>Watch the finish come back.</h3><p>Customers frequently highlight clean blending, updates during the job, and a finished result that looks restored rather than patched.</p></article>
        </div>
      </section>

      <section className="project" id="project">
        <div className="project-intro">
          <span className="eyebrow">05 / START HERE</span>
          <h2>What happened<br />to your boat?</h2>
          <p>Build a quick project brief, copy it, then call Sam. Nothing in this preview is submitted or stored.</p>
        </div>
        <ProjectConsole />
      </section>

      <section className="location" id="contact">
        <div className="location-map" aria-hidden="true">
          <div className="radar"><i /><i /><span /></div>
          <strong>BACLIFF</strong>
          <small>GALVESTON BAY</small>
        </div>
        <div className="location-copy">
          <span className="eyebrow">06 / FIND THE SHOP</span>
          <h2>Marine repair,<br />close to the water.</h2>
          <address>
            {siteConfig.address}<br />
            {siteConfig.city}, {siteConfig.state} {siteConfig.postalCode}
          </address>
          <div className="location-actions">
            <a className="button button-dark" href={siteConfig.locationHref} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a>
            <a className="button button-outline" href={siteConfig.phoneHref}>CALL {siteConfig.phoneDisplay}</a>
          </div>
          <p className="microcopy">Call for current availability. Public listings disagree on Sunday hours, so this preview does not publish a day-by-day schedule.</p>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-wave" aria-hidden="true" />
        <span className="eyebrow">SAM&apos;S BOAT REPAIR · BACLIFF TX</span>
        <h2>Let&apos;s make the<br /><em>damage disappear.</em></h2>
        <a className="button button-coral big" href={siteConfig.phoneHref}>CALL SAM · {siteConfig.phoneDisplay}</a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><i /><b /></span><span>SAM&apos;S <small>BOAT REPAIR</small></span></div>
        <p>Fiberglass · Gelcoat · Finish-focused marine repair</p>
        <p>Private prospect preview · noindex</p>
      </footer>

      <div className="mobile-dock">
        <a href={siteConfig.phoneHref}>CALL SAM</a>
        <a href="#project">START PROJECT</a>
      </div>
    </main>
  );
}
