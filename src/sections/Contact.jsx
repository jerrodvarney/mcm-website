import { useState } from 'react';

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you. Your message has been sent.');
    setFormData({
      name: '', organization: '', email: '', phone: '', message: '',
    });
  };

  return (
    <section id="contact">
      <div id="contact-content">
        <div className="contact-headline">
          <h3>{contact.headline}</h3>
          <p>{contact.intro}</p>
        </div>

        <div className="contact-disclaimer">
          <h3>{contact.noticeTitle}</h3>
          <p>{contact.noticeBody}</p>
        </div>

        <div className="contact-direct">
          <p>
            <strong>
              {contact.directEmail.label}
              :
            </strong>
            {' '}
            <a href={`mailto:${contact.directEmail.value}`}>
              {contact.directEmail.value}
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{contact.fields.name.label}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={contact.fields.name.placeholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">{contact.fields.organization.label}</label>
            <input
              id="organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleChange}
              placeholder={contact.fields.organization.placeholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{contact.fields.email.label}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={contact.fields.email.placeholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">{contact.fields.phone.label}</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={contact.fields.phone.placeholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{contact.fields.message.label}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={contact.fields.message.placeholder}
            />
          </div>

          <button type="submit" className="contact-submit">
            {contact.submitLabel}
          </button>

          <p className="contact-note">{contact.note}</p>
        </form>
      </div>
    </section>
  );
}
