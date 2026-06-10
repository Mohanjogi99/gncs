import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Research() {
  const { language, t, researchCommittee, researchPublications, researchProjects, researchEvents, faculty } = useContext(AppContext);
  
  const [pubSearch, setPubSearch] = useState("");

  const summaryFaculty = faculty || [];

  const currentCommittee = researchCommittee || {};
  const currentPublications = researchPublications || [];
  const currentProjects = researchProjects || [];
  const currentEvents = researchEvents || [];

  // Filter publications by title or author
  const filteredPublications = currentPublications.filter((pub) => {
    const query = pubSearch.toLowerCase();
    const titleMatch = pub.title ? pub.title.toLowerCase().includes(query) : false;
    const authorMatch = pub.author ? pub.author.toLowerCase().includes(query) : false;
    const journalMatch = pub.journal ? pub.journal.toLowerCase().includes(query) : false;
    return titleMatch || authorMatch || journalMatch;
  });

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "अनुसंधान एवं विकास प्रकोष्ठ (R&D)" : "Research & Development Cell (R&D)"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Promoting Academic Inquiries & Publications
        </p>
      </section>

      {/* R&D Overview and Committee */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Intro */}
        <section className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">biotech</span>
              {language === "hi" ? "उद्देश्य एवं दृष्टिकोण" : "Objectives & Vision"}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {language === "hi"
                ? "शासकीय नवीन महाविद्यालय सारागांव का अनुसंधान एवं विकास (R&D) प्रकोष्ठ संकाय सदस्यों और छात्रों के बीच वैज्ञानिक दृष्टिकोण और शोध प्रवृत्ति को बढ़ावा देने के लिए प्रतिबद्ध है। प्रकोष्ठ शोध परियोजनाओं के लिए मार्गदर्शन, राष्ट्रीय/अंतर्राष्ट्रीय संगोष्ठियों के आयोजन और शोध पत्र प्रकाशनों के संवर्धन का कार्य करता है।"
                : "The Research & Development (R&D) Cell at Government Naveen College, Saragaon is committed to cultivating a scientific temper and research culture among faculty and students. The cell facilitates research proposals, guides project submissions, supports event coordination, and highlights quality academic publications."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-on-surface-variant pt-2">
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>{language === "hi" ? "संकाय प्रकाशनों को बढ़ावा देना" : "Promoting research article publication"}</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>{language === "hi" ? "शोध परियोजनाओं हेतु अनुदान समन्वय" : "Coordinating research grant applications"}</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>{language === "hi" ? "संगोष्ठियों एवं कार्यशालाओं का आयोजन" : "Hosting seminars and methodology workshops"}</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>{language === "hi" ? "नैतिक शोध मानकों का अनुपालन" : "Ensuring high ethical research standards"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* R&D Committee */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">groups</span>
            {language === "hi" ? "आर एंड डी समिति" : "R&D Cell Committee"}
          </h3>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/60 space-y-3">
              <div>
                <span className="font-bold text-primary block text-[11px] uppercase tracking-wider text-secondary">Convener / संयोजक:</span>
                <span className="font-semibold text-on-surface">{currentCommittee.convener || "Not Assigned"}</span>
              </div>
              <div className="border-t border-outline-variant/40 pt-2">
                <span className="font-bold text-primary block text-[11px] uppercase tracking-wider text-secondary">Co-Convener / सह-संयोजक:</span>
                <span className="font-semibold text-on-surface">{currentCommittee.coConvener || "Not Assigned"}</span>
              </div>
              <div className="border-t border-outline-variant/40 pt-2">
                <span className="font-bold text-primary block text-[11px] uppercase tracking-wider text-secondary">Members / सदस्य:</span>
                <span className="font-semibold text-on-surface block leading-relaxed">{currentCommittee.members || "None"}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Research Projects */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
          {language === "hi" ? "शोध परियोजनाएं (मेजर/माइनर)" : "Research Projects (Major/Minor)"}
        </h3>
        {currentProjects.length === 0 ? (
          <p className="text-sm text-on-surface-variant italic">{language === "hi" ? "कोई परियोजना उपलब्ध नहीं है।" : "No projects registered currently."}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {currentProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      proj.status === "Ongoing" || proj.status === "सक्रिय" 
                        ? "bg-secondary-container text-on-secondary-container" 
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}>
                      {proj.status}
                    </span>
                    <span className="text-xs font-bold text-primary">{proj.amount}</span>
                  </div>
                  <h4 className="font-bold text-on-surface text-sm sm:text-base leading-snug">
                    {proj.title}
                  </h4>
                </div>
                <div className="border-t border-outline-variant/40 pt-3 text-xs space-y-1 text-on-surface-variant">
                  <div>
                    <span className="font-semibold">{language === "hi" ? "प्रधान अन्वेषक: " : "Principal Investigator: "}</span>
                    <span>{proj.investigator}</span>
                  </div>
                  <div>
                    <span className="font-semibold">{language === "hi" ? "वित्तपोषक एजेंसी: " : "Funding Agency: "}</span>
                    <span>{proj.agency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Publications Summary Report (docx style) */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">analytics</span>
          {language === "hi" ? "संकाय प्रकाशनों का संक्षिप्त विवरण" : "Summary of Faculty Publications"}
        </h3>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          {language === "hi" 
            ? "विभिन्न संकायों द्वारा पेटेंट, पुस्तकें, पुस्तक अध्याय और शोध पत्रों के प्रकाशन का समेकित विवरण नीचे दिया गया है (List of PublicationsDate.docx के अनुसार):"
            : "Consolidated report of Patents, Books, Book Chapters, and Research Papers published by the college faculty members (as per List of PublicationsDate.docx):"}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-outline-variant text-secondary font-bold bg-surface-container-low/50">
                <th className="py-3 px-3 text-center w-12">SNo.</th>
                <th className="py-3 px-3">{language === "hi" ? "संकाय सदस्य का नाम" : "Name of Faculty"}</th>
                <th className="py-3 px-3">{language === "hi" ? "पद" : "Designation"}</th>
                <th className="py-3 px-3 text-center">{language === "hi" ? "पेटेंट" : "Patent"}</th>
                <th className="py-3 px-3 text-center">{language === "hi" ? "पुस्तकें" : "Books"}</th>
                <th className="py-3 px-3 text-center">{language === "hi" ? "पुस्तक अध्याय" : "Book Chapters"}</th>
                <th className="py-3 px-3 text-center">{language === "hi" ? "शोध पत्र" : "Research Papers"}</th>
                <th className="py-3 px-3 text-center bg-secondary-container/10 font-extrabold">{language === "hi" ? "कुल योग" : "Total"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40">
              {summaryFaculty.map((fac, idx) => {
                const patent = fac.patentCount || 0;
                const books = fac.booksCount || 0;
                const chapters = fac.bookChaptersCount || 0;
                const papers = fac.researchPapersCount || 0;
                const total = patent + books + chapters + papers;
                return (
                  <tr key={fac.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-3 text-center font-medium text-on-surface-variant">{idx + 1}</td>
                    <td className="py-3 px-3 font-bold text-on-surface">{fac.name}</td>
                    <td className="py-3 px-3 text-on-surface-variant">{fac.designation}</td>
                    <td className="py-3 px-3 text-center font-semibold text-on-surface-variant">{patent}</td>
                    <td className="py-3 px-3 text-center font-semibold text-on-surface-variant">{books}</td>
                    <td className="py-3 px-3 text-center font-semibold text-on-surface-variant">{chapters}</td>
                    <td className="py-3 px-3 text-center font-semibold text-on-surface-variant">{papers}</td>
                    <td className="py-3 px-3 text-center font-extrabold text-primary bg-secondary-container/5">{total}</td>
                  </tr>
                );
              })}
              
              {/* Aggregates Row */}
              {summaryFaculty.length > 0 && (
                <tr className="bg-surface-container-low font-bold border-t-2 border-outline-variant">
                  <td className="py-3.5 px-3 text-center"></td>
                  <td className="py-3.5 px-3 text-primary uppercase text-[10px] tracking-wider" colSpan={2}>
                    {language === "hi" ? "कुल योग" : "Aggregate Total"}
                  </td>
                  <td className="py-3.5 px-3 text-center text-on-surface">
                    {summaryFaculty.reduce((acc, fac) => acc + (fac.patentCount || 0), 0)}
                  </td>
                  <td className="py-3.5 px-3 text-center text-on-surface">
                    {summaryFaculty.reduce((acc, fac) => acc + (fac.booksCount || 0), 0)}
                  </td>
                  <td className="py-3.5 px-3 text-center text-on-surface">
                    {summaryFaculty.reduce((acc, fac) => acc + (fac.bookChaptersCount || 0), 0)}
                  </td>
                  <td className="py-3.5 px-3 text-center text-on-surface">
                    {summaryFaculty.reduce((acc, fac) => acc + (fac.researchPapersCount || 0), 0)}
                  </td>
                  <td className="py-3.5 px-3 text-center text-primary font-black bg-secondary-container/20">
                    {summaryFaculty.reduce((acc, fac) => {
                      const p = fac.patentCount || 0;
                      const b = fac.booksCount || 0;
                      const c = fac.bookChaptersCount || 0;
                      const r = fac.researchPapersCount || 0;
                      return acc + p + b + c + r;
                    }, 0)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-2">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">menu_book</span>
            {language === "hi" ? "संकाय शोध प्रकाशन" : "Faculty Publications Directory"}
          </h3>
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-lg text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder={language === "hi" ? "शीर्षक या लेखक से खोजें..." : "Search by title, author..."}
              value={pubSearch}
              onChange={(e) => setPubSearch(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-9 pr-4 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        {filteredPublications.length === 0 ? (
          <p className="text-sm text-on-surface-variant italic py-4 text-center">
            {language === "hi" ? "कोई शोध पत्र नहीं मिला।" : "No publications found matching the query."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-outline-variant text-secondary font-bold">
                  <th className="py-3 px-2">{language === "hi" ? "शोध पत्र का शीर्षक" : "Research Paper Title"}</th>
                  <th className="py-3 px-2">{language === "hi" ? "लेखक" : "Author"}</th>
                  <th className="py-3 px-2">{language === "hi" ? "जर्नल का नाम" : "Journal Name"}</th>
                  <th className="py-3 px-2 text-center">{language === "hi" ? "वर्ष" : "Year"}</th>
                  <th className="py-3 px-2">{language === "hi" ? "ISSN/ISBN" : "ISSN/ISBN"}</th>
                  <th className="py-3 px-2 text-center">{language === "hi" ? "दस्तावेज़" : "Link"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/40">
                {filteredPublications.map((pub) => (
                  <tr key={pub.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-3 px-2 font-bold text-on-surface leading-normal max-w-xs sm:max-w-md">
                      {pub.title}
                    </td>
                    <td className="py-3 px-2 text-on-surface-variant font-medium">{pub.author}</td>
                    <td className="py-3 px-2 text-on-surface-variant italic">{pub.journal}</td>
                    <td className="py-3 px-2 text-on-surface-variant font-semibold text-center">{pub.year}</td>
                    <td className="py-3 px-2 font-mono text-on-surface-variant">{pub.issn || "N/A"}</td>
                    <td className="py-3 px-2 text-center">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-0.5 text-red-600 hover:scale-105 transition-all font-bold"
                          title="Open PDF"
                        >
                          <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                          PDF
                        </a>
                      ) : (
                        <span className="text-[10px] text-on-surface-variant italic">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Seminars & Workshops Organized */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">event_available</span>
          {language === "hi" ? "आयोजित राष्ट्रीय सेमिनार एवं कार्यशालाएं" : "Seminars & Workshops Organized"}
        </h3>
        {currentEvents.length === 0 ? (
          <p className="text-sm text-on-surface-variant italic">{language === "hi" ? "कोई कार्यक्रम विवरण उपलब्ध नहीं है।" : "No events registered currently."}</p>
        ) : (
          <div className="space-y-4 pt-2">
            {currentEvents.map((ev) => (
              <div
                key={ev.id}
                className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary bg-primary-container/20 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">calendar_month</span>
                      {ev.date}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-primary mt-1">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-semibold">{language === "hi" ? "मुख्य विषय: " : "Theme/Focus: "}</span>
                    {ev.theme}
                  </p>
                </div>
                <div className="text-xs text-on-surface-variant font-medium shrink-0 md:text-right">
                  <span className="block text-[10px] uppercase font-bold text-secondary">{language === "hi" ? "समन्वयक/संयोजक" : "Coordinator"}</span>
                  <span className="text-on-surface font-semibold">{ev.coordinator}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Research Guidelines & Ethics policy */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">gavel</span>
          {language === "hi" ? "अनुसंधान नीति एवं नैतिकता" : "Research Guidelines & Code of Ethics"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant space-y-2">
            <h4 className="font-bold text-primary text-sm sm:text-base flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">policy</span>
              {language === "hi" ? "प्लेगियरीज़म (साहित्यिक चोरी) नीति" : "Anti-Plagiarism Policy"}
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {language === "hi"
                ? "महाविद्यालय शोध में पूर्ण ईमानदारी और मौलिकता का समर्थन करता है। सभी संकाय और छात्र शोध पत्रों के प्रकाशन से पूर्व मान्यता प्राप्त साहित्यिक चोरी रोधी सॉफ्टवेयर द्वारा सत्यापन अनिवार्य है।"
                : "The college holds a zero-tolerance policy towards plagiarism. Faculty and students are encouraged to ensure originality of work and verify manuscripts through designated plagiarism detection software."}
            </p>
          </div>
          <div className="p-5 bg-surface-container-low rounded-2xl border border-outline-variant space-y-2">
            <h4 className="font-bold text-primary text-sm sm:text-base flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              {language === "hi" ? "शोध प्रोत्साहन एवं गुणवत्ता" : "Quality & Incentives"}
            </h4>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {language === "hi"
                ? "संकाय सदस्यों को यूजीसी-केयर (UGC-CARE) सूची, स्कोपस (Scopus), या पीयर-रिव्यूड जर्नल्स में उच्च प्रभाव वाले शोध पत्र प्रकाशित करने के लिए विशेष रूप से प्रोत्साहित किया जाता है।"
                : "Faculty members are motivated to publish research in UGC-CARE approved list of journals, Scopus-indexed publications, and peer-reviewed international journals of high repute."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
