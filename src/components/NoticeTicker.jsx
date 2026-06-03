import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function NoticeTicker() {
  const { notices, language, t } = useContext(AppContext);

  // Filter notices that are marked as important and not expired
  const importantNotices = notices.filter((n) => n.isImportant);

  if (importantNotices.length === 0) return null;

  return (
    <div className="bg-secondary-container text-on-secondary-container py-2.5 overflow-hidden rounded-xl shadow-sm border border-secondary/20 relative flex items-center">
      {/* Static Label Badge */}
      <div className="absolute left-0 top-0 bottom-0 bg-secondary px-4 z-10 flex items-center shadow-md rounded-l-xl">
        <span className="material-symbols-outlined text-white mr-1.5 text-lg">campaign</span>
        <span className="font-hindi text-xs sm:text-sm text-white font-bold whitespace-nowrap">
          {t("latest")} |
        </span>
      </div>

      {/* Scrolling Text Container */}
      <div className="animate-scroll whitespace-nowrap pl-[140px] flex items-center">
        {importantNotices.map((notice) => (
          <Link
            key={notice.id}
            to="/student-corner"
            className="font-hindi text-xs sm:text-sm font-semibold mx-8 hover:underline hover:text-secondary flex items-center gap-1.5 transition-all text-on-secondary-container"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            {language === "hi" ? notice.titleHindi : notice.titleEnglish}
            <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
              New
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
