export default function Footer() {
  return (
    <footer className="footer founders-footer">
      <h3 className="founder-title">Founders</h3>

      <div className="founders-row">

        <div className="founder-card">
          <img src="/images/founders/founder1.jpg" alt="Founder 1" />
          <h4>Hemant Sonare</h4>
          <p>+91 98765 43210</p>
        </div>

        <div className="founder-card">
          <img src="/images/founders/founder2.jpg" alt="Founder 2" />
          <h4>Rahul Sharma</h4>
          <p>+91 91234 56789</p>
        </div>

      </div>

      <p className="footer-copy">© Divine Events — All Rights Reserved</p>
    </footer>
  );
}
