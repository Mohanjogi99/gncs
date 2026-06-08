import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Footer() {
  const { t, language } = useContext(AppContext);

  return (
    <footer className="w-full bg-primary text-white border-t-4 border-secondary-container mt-auto">
      {/* Top Footer Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* About College Column */}
        <div className="space-y-4">
          <h3 className="font-hindi text-lg font-bold text-secondary-container flex items-center gap-2 flex-wrap">
            <span>{language === "hi" ? "शासकीय नवीन महाविद्यालय, सारागांव" : "Govt Naveen College, Saragaon"}</span>
            <span className="text-[10px] bg-white/10 text-secondary-container border border-white/20 font-bold px-2 py-0.5 rounded-full">
              {language === "hi" ? "कोड: 317" : "Code: 317"}
            </span>
            <span className="text-[10px] bg-white/10 text-secondary-container border border-white/20 font-bold px-2 py-0.5 rounded-full">
              AISHE: C-70734
            </span>
          </h3>
          <p className="text-sm text-on-primary-container leading-relaxed opacity-90">
            {t("footerInfo")}
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-white text-lg">public</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-white text-lg">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-sm mb-5 text-secondary-container uppercase tracking-wider">
            {t("quickLinks")}
          </h4>
          <ul className="space-y-2.5 text-sm text-on-primary-container">
            <li>
              <a
                href="https://snpv.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-container hover:underline transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-xs">link</span>
                SNPV Raigarh (University)
              </a>
            </li>
            <li>
              <a
                href="http://highereducation.cg.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-container hover:underline transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-xs">link</span>
                Higher Education C.G.
              </a>
            </li>
            <li>
              <a
                href="https://www.ugc.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-container hover:underline transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-xs">link</span>
                UGC India
              </a>
            </li>
            <li>
              <a
                href="https://nlist.inflibnet.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-container hover:underline transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-xs">link</span>
                INFLIBNET N-LIST Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-bold text-sm mb-5 text-secondary-container uppercase tracking-wider">
            {t("contactInfo")}
          </h4>
          <ul className="space-y-3.5 text-sm text-on-primary-container">
            <li className="flex gap-2.5 items-start">
              <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">location_on</span>
              <span>
                Saragaon, Ward No. 12,<br />
                Janjgir-Champa District,<br />
                Chhattisgarh - 495686
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <span className="material-symbols-outlined text-secondary-container text-lg">call</span>
              <span>7722861400, 9893907415</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <span className="material-symbols-outlined text-secondary-container text-lg">mail</span>
              <span className="break-all">govtcollegesaragaon@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Affiliation Details Column */}
        <div>
          <h4 className="font-bold text-sm mb-5 text-secondary-container uppercase tracking-wider">
            {language === "hi" ? "संबद्धता एवं स्थिति" : "Affiliation & Code"}
          </h4>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-xs leading-relaxed space-y-2 text-on-primary-container">
            <p>
              {language === "hi"
                ? "शहीद नंदकुमार पटेल विश्वविद्यालय, रायगढ़ (छ.ग.) से संबद्ध।"
                : "Affiliated to Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh (C.G.)"}
            </p>
            <p>
              {language === "hi"
                ? "महाविद्यालय कोड: 317"
                : "College Code: 317"}
            </p>
            <p>
              {language === "hi"
                ? "स्थापना वर्ष: 2021"
                : "Established Year: 2021"}
            </p>
            <p>
              {language === "hi"
                ? "श्रेणी: शासकीय महाविद्यालय (सह-शिक्षा)"
                : "Type: Government Co-Education College"}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Credit Bar */}
      <div className="bg-primary-container text-xs text-on-primary-container/80 py-6 border-t border-white/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {language === "hi" ? "शासकीय नवीन महाविद्यालय, सारागांव" : "Government Naveen College, Saragaon"}. {t("rightsReserved")}
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span className="material-symbols-outlined text-xs">shield_with_heart</span>
            {t("designBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
