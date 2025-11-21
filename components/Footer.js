export default function Footer() {
  return (
    <footer className="footer founders-footer">

      <h3 className="founder-title">Founders</h3>

      <div className="founders-row">

        <div className="founder-card">
          <img src="/images/founders/founder1.jpeg" alt="Founder 1" />
          <h4>Priyanshu Mhaski</h4>
          <p className="founder-role">Creative Director</p>
          <a href="tel:+917067869093" className="founder-phone">
            +91 7067869093
          </a>
        </div>

        <div className="founder-card">
          <img src="/images/founders/founder2.jpeg" alt="Founder 2" />
          <h4>Deepanshu Paleria</h4>
          <p className="founder-role">Operational Head</p>
          <a href="tel:+919399138456" className="founder-phone">
            +91 9399138456
          </a>
        </div>

      </div>

      <p className="footer-copy">
        © Divine Events — Beautiful moments, made with love.
      </p>
    </footer>
  );
}
