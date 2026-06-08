import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Library() {
  const { language, t, libraryRules } = useContext(AppContext);

  const libraryStats = [
    { labelHi: "कुल पुस्तकें (ग्रंथ सूची)", labelEn: "Total Books (Volume)", value: "3,250+" },
    { labelHi: "संदर्भ ग्रंथ (रेफरेंस बुक्स)", labelEn: "Reference Volumes", value: "450+" },
    { labelHi: "समाचार पत्र एवं पत्रिकाएं", labelEn: "Newspapers & Journals", value: "8 Daily, 4 Monthly" },
    { labelHi: "ई-संसाधन (N-LIST)", labelEn: "E-Resources (N-LIST Subscription)", value: "6,000+ e-journals, 1,99,500+ e-books" }
  ];

  const currentRules = libraryRules || [];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "ग्रंथालय (पुस्तकालय)" : "Central Library Portal"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Books, Rules & E-Resources
        </p>
      </section>

      {/* Intro and Statistics */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        {/* Intro */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">local_library</span>
            Introduction | ग्रंथालय परिचय
          </h3>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {language === "hi"
              ? "शासकीय नवीन महाविद्यालय सारागांव का पुस्तकालय ज्ञान का मुख्य केंद्र है। वर्तमान में ग्रंथालय में विज्ञान, कला और वाणिज्य संकायों के विभिन्न विषयों की तीन हजार से अधिक पुस्तकें उपलब्ध हैं। छात्र-छात्राओं को डिजिटल पठन सामग्री उपलब्ध कराने के उद्देश्य से इनफ्लिबनेट (INFLIBNET) की एन-लिस्ट (N-LIST) सेवा का वार्षिक सब्सक्रिप्शन भी प्राप्त है।"
              : "The Central Library at Government Naveen College, Saragaon serves as the primary academic resource hub. Currently stocking over 3,250 volumes covering humanities, science, and business management, the library is subscription-linked with INFLIBNET N-LIST giving students access to millions of e-journals and e-books."}
          </p>

          {/* External digital resource links */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="https://nlist.inflibnet.ac.in"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-primary-container transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">link</span>
              Login to N-LIST
            </a>
            <a
              href="https://swayam.gov.in"
              target="_blank"
              rel="noreferrer"
              className="bg-secondary text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-secondary/90 transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">school</span>
              SWAYAM Online Courses
            </a>
            <a
              href="https://ndl.iitkgp.ac.in"
              target="_blank"
              rel="noreferrer"
              className="border border-outline-variant hover:bg-surface text-on-surface text-xs font-bold px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              National Digital Library
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-3xl border border-outline-variant flex flex-col justify-between">
          <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/60 pb-3 mb-4">
            Library Metrics | सांख्यिकी
          </h3>
          <div className="divide-y divide-outline-variant/60">
            {libraryStats.map((stat, idx) => (
              <div key={idx} className="py-2.5 flex justify-between gap-4 text-xs">
                <span className="font-bold text-on-surface-variant">
                  {language === "hi" ? stat.labelHi : stat.labelEn}
                </span>
                <span className="text-right text-primary font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Rules */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">policy</span>
          Library Rules & Guidelines | पुस्तकालय नियमावली
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-on-surface-variant">
          {currentRules.map((item, idx) => (
            <div key={item.id || idx} className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-2xl">
              <p className="font-bold text-primary mb-1">Rule {idx + 1}</p>
              <p className="leading-relaxed">{language === "hi" ? item.ruleHi : item.ruleEn}</p>
            </div>
          ))}
          {currentRules.length === 0 && (
            <div className="col-span-2 text-center text-on-surface-variant italic py-4">
              No rules registered yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
