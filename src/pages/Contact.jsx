import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const { addContactMessage, language, t } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Name and message are required!");
      return;
    }
    // Write message to mock database
    addContactMessage({
      name: formData.name,
      email: formData.email || "visitor@gncs.in",
      mobile: formData.mobile || "N/A",
      message: formData.message,
    });
    setSuccess(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "संपर्क करें" : "Contact Us"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Office Desk & Location Address
        </p>
      </section>

      {/* Contact Layout Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        {/* Contact Info Details */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              College Address
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-medium">
              <span className="font-bold text-primary block text-sm mb-1">Government Naveen College, Saragaon</span>
              Ward No. 12, Saragaon Block,<br />
              Janjgir-Champa District,<br />
              Chhattisgarh, India - 495686
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">call</span>
              Office Desk & Timings
            </h3>
            <ul className="text-xs sm:text-sm text-on-surface-variant space-y-2.5 font-medium">
              <li className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="font-semibold text-primary">Working Days:</span>
                <span>Monday - Saturday</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="font-semibold text-primary">Office Timings:</span>
                <span>10:30 AM - 05:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="font-semibold text-primary">General Enquiry:</span>
                <span>9893907415</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-primary">General Email:</span>
                <span>govtcollegesaragaon@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">mail</span>
              Send Message / Inquiry Form
            </h3>
            <p className="text-xs text-on-surface-variant mt-1.5">
              Have questions? Leave your details below and our administrative office will reply via email.
            </p>
          </div>

          {success && (
            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-xs font-semibold flex items-center gap-2 border border-green-200">
              <span className="material-symbols-outlined">check_circle</span>
              {t("successMsg")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{t("name")} *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{t("mobile")}</label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">{t("username")} (Email)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">{t("message")} *</label>
              <textarea
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your feedback, question, or complaints here..."
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-3 rounded-xl transition-all shadow flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">send</span>
              Submit Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">map</span>
          Campus Geolocation Map | गूगल मैप लोकेशन
        </h3>
        <div className="w-full h-80 rounded-2xl overflow-hidden border border-outline-variant relative bg-surface-container">
          {/* Iframe with actual coordinate or a beautiful loading state */}
          <iframe
            title="Govt Naveen College Saragaon Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.81050212716!2d82.49386769999999!3d22.0514101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27ea7d1d2830f3%3A0x67ee1c009d73d6e5!2sSaragaon%2C%20Chhattisgarh%20495686!5e0!3m2!1sen!2sin!4v1717462000000!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
