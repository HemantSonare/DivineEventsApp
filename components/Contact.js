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
    setSent(true);
    setState({ name: '', email: '', phone: '', message: '' });
  };

  const openWhatsApp = () => {
    const phone = '+917067869093'.replace('+','');
    const text = encodeURIComponent(
      `Hello, I would like to enquire about a luxury event. Name: ${state.name || '—'}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        
        <form className="form" onSubmit={onSubmit}>

          {/* ⭐ NEW PREMIUM SIMPLE TEXT ⭐ */}
          <h2 className="section-title">Private Enquiry</h2>
          <p className="section-sub">
            Please share a few details. Our team will personally connect with you
            and help plan your beautiful event.
          </p>

          <label>
            Full Name
            <input
              name="name"
              value={state.name}
              onChange={onChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={onChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              name="phone"
              placeholder="With country code (optional)"
              value={state.phone}
              onChange={onChange}
            />
          </label>

          <label>
            Tell us about your event
            <textarea
              name="message"
              rows={4}
              placeholder="Example: Haldi décor, birthday theme, wedding setup etc."
              value={state.message}
              onChange={onChange}
              required
            />
          </label>

          <div className="form-buttons">
            <button type="submit" className="btn-primary-outline">
              Send Enquiry
            </button>

            <button
              type="button"
              className="btn-ghost"
              onClick={openWhatsApp}
            >
              Chat on WhatsApp
            </button>
          </div>

          {sent && (
            <div className="form-success">
              Thank you! Your enquiry has been received.  
              Our team will connect with you shortly.
            </div>
          )}

        </form>
        
      </div>
    </section>
  );
}
