export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Curated Luxury Services</h2>
        <p className="section-sub">
          We design and orchestrate immersive experiences where every touchpoint
          feels considered, effortless, and unforgettable.
        </p>

        <div className="cards-grid">
          <article className="card">
            <div className="thumb thumb--wedding" />
            <h3>Signature Weddings</h3>
            <p>
              Bespoke wedding concepts, décor, and production with intricate
              detailing, flawless timelines, and a dedicated core team.
            </p>
          </article>

          <article className="card">
            <div className="thumb thumb--intimate" />
            <h3>Intimate & Private Events</h3>
            <p>
              Curated gatherings, family celebrations, and milestones designed
              with warmth, privacy, and refined aesthetics.
            </p>
          </article>

          <article className="card">
            <div className="thumb thumb--destination" />
            <h3>Destination Experiences</h3>
            <p>
              Turnkey planning for destination weddings and celebrations —
              logistics, hospitality, guest management, and on-ground execution.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
