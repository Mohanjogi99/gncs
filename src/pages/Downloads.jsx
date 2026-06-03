import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Downloads() {
  const { downloads, language, t } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Admission Forms", "Scholarship Forms", "Prospectus", "Academic Calendar"];

  const filteredDownloads = downloads.filter((down) => {
    const matchesSearch =
      down.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      down.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      down.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "All" || down.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "डाउनलोड केंद्र" : "Document Download Center"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Admission Forms, Syllabus & Prospectus PDFs
        </p>
      </section>

      {/* Filter Category & Search Row */}
      <section className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-bold border transition-all ${
                activeCategory === cat
                  ? "bg-secondary text-white border-secondary shadow-sm"
                  : "bg-white hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
              }`}
            >
              {cat === "All" ? (language === "hi" ? "सभी फ़ाइलें" : "All Documents") : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary bg-white outline-none transition-all text-xs sm:text-sm"
          />
          <span className="material-symbols-outlined text-outline absolute left-3 top-2.5 text-lg">search</span>
        </div>
      </section>

      {/* Downloads Table */}
      <section className="bg-white rounded-3xl border border-outline-variant/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-surface-container-low border-b border-outline-variant text-xs font-bold text-on-surface-variant uppercase">
              <tr>
                <th className="px-6 py-4">Document Title / विवरण</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Uploaded Date</th>
                <th className="px-6 py-4">Uploaded By</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-xs sm:text-sm">
              {filteredDownloads.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center italic text-on-surface-variant">
                    No downloadable items matching selection found.
                  </td>
                </tr>
              ) : (
                filteredDownloads.map((down) => (
                  <tr key={down.id} className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="px-6 py-4 space-y-1">
                      <span className="font-bold text-primary block">
                        {language === "hi" ? down.titleHindi : down.titleEnglish}
                      </span>
                      <span className="text-[10px] text-outline font-semibold">Format: PDF (Universal)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold">
                        {down.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-medium">{down.createdAt}</td>
                    <td className="px-6 py-4 text-on-surface-variant font-semibold">{down.uploadedBy || "Office"}</td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={down.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                        Download PDF
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Note Guidelines */}
      <section className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/60 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <h4 className="font-bold text-primary mb-2">Instructions for Students:</h4>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Download and print forms on standard A4 paper for physical submissions.</li>
          <li>For scholarship offline forms, make sure to attach all certificates listed on the cover sheet.</li>
          <li>New syllabus copies are updated directly based on Shaheed Nandkumar Patel University notifications.</li>
        </ul>
      </section>
    </div>
  );
}
