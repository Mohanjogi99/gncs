import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Library() {
  const { language, t } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState("");

  const mockBooks = [
    { title: "Introduction to Sociology / समाजशास्त्र एक परिचय", author: "C. N. Shankar Rao", stream: "Arts", status: "Available" },
    { title: "Concepts of Modern Physics / आधुनिक भौतिकी के सिद्धांत", author: "Arthur Beiser", stream: "Science", status: "Available" },
    { title: "Financial Accounting / वित्तीय लेखांकन", author: "S. N. Maheshwari", stream: "Commerce", status: "Issued" },
    { title: "History of Modern India / आधुनिक भारत का इतिहास", author: "Bipan Chandra", stream: "Arts", status: "Available" },
    { title: "Organic Chemistry / कार्बनिक रसायन", author: "Morrison & Boyd", stream: "Science", status: "Available" },
    { title: "Principles of Economics / अर्थशास्त्र के सिद्धांत", author: "N. Gregory Mankiw", stream: "Commerce", status: "Available" }
  ];

  const filteredBooks = mockBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.stream.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const libraryStats = [
    { labelHi: "कुल पुस्तकें (ग्रंथ सूची)", labelEn: "Total Books (Volume)", value: "3,250+" },
    { labelHi: "संदर्भ ग्रंथ (रेफरेंस बुक्स)", labelEn: "Reference Volumes", value: "450+" },
    { labelHi: "समाचार पत्र एवं पत्रिकाएं", labelEn: "Newspapers & Journals", value: "8 Daily, 4 Monthly" },
    { labelHi: "ई-संसाधन (N-LIST)", labelEn: "E-Resources (N-LIST Subscription)", value: "6,000+ e-journals, 1,99,500+ e-books" }
  ];

  const libraryRules = [
    { ruleHi: "प्रत्येक छात्र को अधिकतम 2 पुस्तकें 15 दिनों के लिए जारी की जा सकती हैं।", ruleEn: "Each student is eligible to borrow up to 2 books for a duration of 15 days." },
    { ruleHi: "निर्धारित तिथि के बाद पुस्तक जमा करने पर ₹1 प्रति दिन की दर से अर्थदंड देय होगा।", ruleEn: "A fine of ₹1 per day will be charged for overdue books." },
    { ruleHi: "पुस्तकालय परिसर के भीतर पूर्ण शांति एवं अनुशासन बनाए रखना अनिवार्य है।", ruleEn: "Maintaining complete silence and discipline inside the library is compulsory." },
    { ruleHi: "संदर्भ ग्रंथ, शब्दकोश और पत्र-पत्रिकाएं पुस्तकालय से बाहर ले जाने की अनुमति नहीं है।", ruleEn: "Reference books, journals, and dictionaries are reserved for in-library reading only." }
  ];

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

      {/* Interactive Book Search Simulation */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
            <span className="material-symbols-outlined text-secondary">search</span>
            Search Catalog Simulation | ग्रंथ सूची खोज
          </h3>
          <p className="text-xs text-on-surface-variant mt-1.5">
            Search library catalog database by typing keywords, author name, or stream.
          </p>
        </div>

        <div className="max-w-md">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Title, Author, or Stream (Arts, Science, Commerce)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all text-xs sm:text-sm"
            />
            <span className="material-symbols-outlined text-outline absolute left-3 top-3">search</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-outline-variant">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-surface-container border-b border-outline-variant">
              <tr className="font-bold text-on-surface-variant">
                <th className="px-5 py-3">Book Title / पुस्तक का नाम</th>
                <th className="px-5 py-3">Author</th>
                <th className="px-5 py-3">Stream</th>
                <th className="px-5 py-3">Availability Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 bg-surface-container-lowest">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-5 py-6 text-center italic text-on-surface-variant">
                    No books matching your query found.
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low transition-all">
                    <td className="px-5 py-3 font-semibold text-primary">{book.title}</td>
                    <td className="px-5 py-3 text-on-surface-variant">{book.author}</td>
                    <td className="px-5 py-3 font-bold">{book.stream}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          book.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Library Rules */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">policy</span>
          Library Rules & Guidelines | पुस्तकालय नियमावली
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-on-surface-variant">
          {libraryRules.map((item, idx) => (
            <div key={idx} className="p-4 bg-surface-container-low border border-outline-variant/50 rounded-2xl">
              <p className="font-bold text-primary mb-1">Rule {idx + 1}</p>
              <p className="leading-relaxed">{language === "hi" ? item.ruleHi : item.ruleEn}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
