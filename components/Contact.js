import { useState } from 'react';

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    // Placeholder: just show success locally.
    setSent(true);
    setState({ name: '', email: '', phone: '', message: '' });
  };

  const openWhatsApp = () => {
    const phone = '+917067869093'.replace('+','');
    const text = encodeURIComponent(
      `Hello, I would like to enquire about a luxury event. Name: ${
        state.name || '—'
      }`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="section-title">Private Enquiry</h2>
          <p className="section-sub">
            Share a few details and our team will connect with you for a
            one-to-one conversation.
          </p>

          <label>
            Full name
            <input
              name="name"
              value={state.name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Phone (with country code)
            <input
              name="phone"
              value={state.phone}
              onChange={onChange}
            />
          </label>
          <label>
            Tell us about your event
            <textarea
              name="message"
              rows={4}
              value={state.message}
              onChange={onChange}
              required
            />
          </label>

          <div className="form-buttons">
            <button type="submit" className="btn-primary-outline">
              Send Enquiry
            </button>
          
            <button type="button" className="btn-ghost" onClick={openWhatsApp}>
              Chat on WhatsApp
            </button>
          </div>


          {sent && (
            <div className="form-success">
              Thank you. Your enquiry has been noted (demo). We&apos;ll connect
              with you shortly.
            </div>
          )}
        </form>

        <aside className="contact-info">
          <div className="info-card glass">
            <h3>Direct Contact</h3>
            <p>
              For time-sensitive or ultra-private events, you can reach us
              directly via WhatsApp or phone.
            </p>
            <ul>
              <li>
                <strong>WhatsApp:</strong> +91 99999 99999
              </li>
              <li>
                <strong>Service Areas:</strong> Pan India & Destinations
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
