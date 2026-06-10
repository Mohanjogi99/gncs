import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function BiodataViewer() {
  const { id } = useParams();
  const { faculty, language } = useContext(AppContext);
  
  const member = faculty.find((f) => f.id === id);

  if (!member) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 text-center bg-white rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <span className="material-symbols-outlined text-error text-5xl">warning</span>
        <h3 className="text-lg font-bold text-primary">Faculty Member Not Found</h3>
        <p className="text-xs text-on-surface-variant">The requested faculty profile could not be loaded.</p>
        <Link to="/" className="inline-block bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold">
          Go Back Home
        </Link>
      </div>
    );
  }

  if (!member.biodataUrl || member.biodataUrl.length <= 50) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 text-center bg-white rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <span className="material-symbols-outlined text-secondary text-5xl">description</span>
        <h3 className="text-lg font-bold text-primary">Biodata Not Available</h3>
        <p className="text-xs text-on-surface-variant">No biodata document has been uploaded for {member.name} yet.</p>
        <Link to="/" className="inline-block bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold">
          Go Back Home
        </Link>
      </div>
    );
  }

  const safeFileName = `${member.name.replace(/[^a-zA-Z0-9]/g, "_")}_Biodata.pdf`;

  return (
    <div className="w-full h-screen flex flex-col bg-surface-container-lowest">
      {/* Header bar */}
      <header className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-md border-b border-primary-container/20 shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-white hover:text-secondary-container transition-colors" title="Back to Home">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <div>
            <h2 className="font-bold text-sm sm:text-base leading-tight">
              {member.name}
            </h2>
            <p className="text-[10px] sm:text-xs text-primary-container font-semibold uppercase tracking-wider opacity-85">
              {member.designation} • {language === "hi" ? "बायोडाटा" : "Biodata / CV"}
            </p>
          </div>
        </div>
        
        <a
          href={member.biodataUrl}
          download={safeFileName}
          className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">download</span>
          {language === "hi" ? "डाउनलोड करें" : "Download PDF"}
        </a>
      </header>

      {/* Embedded PDF Viewer */}
      <main className="flex-1 w-full bg-neutral-900 p-2 sm:p-4 flex items-stretch">
        <object
          data={member.biodataUrl}
          type="application/pdf"
          className="w-full h-full rounded-2xl shadow-lg border border-white/5"
        >
          <iframe
            src={member.biodataUrl}
            title={`${member.name} Biodata`}
            className="w-full h-full rounded-2xl border-none"
          >
            <div className="text-white text-center p-8 max-w-sm mx-auto space-y-4 my-auto">
              <span className="material-symbols-outlined text-5xl text-outline-variant">picture_as_pdf</span>
              <h4 className="font-bold text-sm">Inline PDF View Not Supported</h4>
              <p className="text-xs text-outline-variant leading-relaxed">
                Your browser or device does not support viewing PDFs inline. You can download the file directly to view it.
              </p>
              <a
                href={member.biodataUrl}
                download={safeFileName}
                className="inline-block bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Download Biodata PDF
              </a>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}
