import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Administration() {
  const { t, language, janbhagidari, officeStaff, committees } = useContext(AppContext);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "महाविद्यालय प्रशासन" : "College Administration"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Governance & Committees
        </p>
      </section>

      {/* Principal Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="aspect-square max-w-[200px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-outline-variant shadow-sm bg-surface-container">
            <img
              src="/principal.jpg"
              alt="Principal Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">{t("principalName")}</h3>
              <p className="text-xs sm:text-sm text-secondary font-semibold uppercase">
                Principal & Head of Institution | प्राचार्य
              </p>
            </div>
            <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-2">
              <p className="font-semibold text-primary">Qualification: M.A. (English), Assistant Professor</p>
              <p>
                {language === "hi"
                  ? "प्रो. बी. के. पटेल को उच्च शिक्षा प्रशासन और अध्यापन का वृहद अनुभव प्राप्त है। उन्होंने छत्तीसगढ़ शासन के विभिन्न प्रतिष्ठित महाविद्यालयों में प्रशासनिक पदों पर कार्य किया है।"
                  : "Prof. B. K. Patel has extensive experience in higher education administration and teaching. He has worked in administrative positions at various prestigious government colleges in Chhattisgarh."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold justify-center md:justify-start">
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                govtcollegesaragaon@gmail.com
              </span>
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                +91 98939 07415
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Janbhagidari and Office Staff Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter pt-4">
        {/* Janbhagidari Committee */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant/60 pb-2.5 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary font-bold">groups</span>
            Janbhagidari Committee | जनभागीदारी समिति
          </h3>
          <p className="text-xs text-on-surface-variant opacity-80 mb-2">
            {language === "hi"
              ? "महाविद्यालय के विकास एवं स्थानीय स्तर पर समस्याओं के निराकरण हेतु गठित समिति।"
              : "Committee constituted for the local development of college infrastructure and student welfare."}
          </p>
          <div className="divide-y divide-outline-variant/50">
            {janbhagidari.map((member, idx) => (
              <div key={idx} className="py-3 flex justify-between gap-4 text-xs sm:text-sm">
                <span className="font-bold text-on-surface">
                  {language === "hi" ? member.nameHi : member.nameEn}
                </span>
                <span className="text-on-surface-variant text-right font-medium">
                  {language === "hi" ? member.roleHi : member.roleEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Office Staff */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant/60 pb-2.5 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary font-bold">support_agent</span>
            Administrative Office Staff | कार्यालय स्टाफ
          </h3>
          <p className="text-xs text-on-surface-variant opacity-80 mb-2">
            {language === "hi"
              ? "महाविद्यालय का प्रशासनिक कार्यालय निम्नलिखित अधिकारियों एवं कर्मचारियों द्वारा संचालित होता है।"
              : "Members handling administrative inquiries, registers, scholarship payouts, and student records."}
          </p>
          <div className="divide-y divide-outline-variant/50">
            {officeStaff.map((staff, idx) => (
              <div key={idx} className="py-3 flex justify-between gap-4 text-xs sm:text-sm">
                <span className="font-bold text-on-surface">
                  {language === "hi" ? staff.nameHi : staff.nameEn}
                </span>
                <span className="text-on-surface-variant text-right font-medium">
                  {language === "hi" ? staff.roleHi : staff.roleEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Committees */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant/60 pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary font-bold">badge</span>
          Academic & Administrative Committees | महाविद्यालयीन आंतरिक समितियां
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {committees.map((com, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-primary/20 transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-sm text-primary">
                  {language === "hi" ? com.titleHi : com.titleEn}
                </h4>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  <span className="font-semibold text-primary">Convener:</span> {com.convenerEn}
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-semibold text-primary">Members:</span> {com.membersEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
