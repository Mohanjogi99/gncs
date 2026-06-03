import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Administration() {
  const { t, language } = useContext(AppContext);

  const committees = [
    { titleEn: "Admission Committee", titleHi: "प्रवेश समिति", convenerEn: "Dr. Rajeshwari Patel", membersEn: "Shri Vinod Dewangan, Smt. Shweta Soni" },
    { titleEn: "Anti-Ragging Cell", titleHi: "एंटी-रैगिंग सेल", convenerEn: "Shri Vinod Dewangan", membersEn: "Dr. Kamlesh Chandra, Shri Santosh Sahu" },
    { titleEn: "Scholarship Committee", titleHi: "छात्रवृत्ति समिति", convenerEn: "Smt. Shweta Soni", membersEn: "Ku. Preeti Tiwari, Shri Santosh Sahu" },
    { titleEn: "NSS Committee", titleHi: "रा.से.यो. (NSS) समिति", convenerEn: "Dr. Kamlesh Chandra", membersEn: "Ku. Preeti Tiwari" },
    { titleEn: "Grievance Redressal Cell", titleHi: "शिकायत निवारण सेल", convenerEn: "Dr. Rajeshwari Patel", membersEn: "Shri Vinod Dewangan, Smt. Shweta Soni" },
    { titleEn: "Discipline Committee", titleHi: "अनुशासन समिति", convenerEn: "Shri Vinod Dewangan", membersEn: "Dr. Rajeshwari Patel, Dr. Kamlesh Chandra" }
  ];

  const janbhagidari = [
    { nameEn: "Shri Rajesh Patel", nameHi: "श्री राजेश पटेल", roleEn: "President (Janbhagidari)", roleHi: "अध्यक्ष (जनभागीदारी समिति)" },
    { nameEn: "Prof. B. K. Patel", nameHi: "प्रो. बी. के. पटेल", roleEn: "Ex-Officio Member Secretary", roleHi: "पदेन सदस्य सचिव (प्राचार्य)" },
    { nameEn: "Shri Santosh Kumar", nameHi: "श्री संतोष कुमार", roleEn: "Donor Member", roleHi: "दाता सदस्य" },
    { nameEn: "Smt. Anita Sahu", nameHi: "श्रीमती अनीता साहू", roleEn: "Public Representative", roleHi: "जनप्रतिनिधि" },
    { nameEn: "Shri Vinod Dewangan", nameHi: "श्री विनोद देवांगन", roleEn: "Teacher Representative", roleHi: "शिक्षक प्रतिनिधि" }
  ];

  const officeStaff = [
    { nameEn: "Shri Santosh Sahu", nameHi: "श्री संतोष साहू", roleEn: "Office Superintendent / Assistant Grade-I", roleHi: "मुख्य लिपिक / सहायक वर्ग-1" },
    { nameEn: "Smt. Pushpa Rathore", nameHi: "श्रीमती पुष्पा राठौर", roleEn: "Assistant Grade-II", roleHi: "सहायक वर्ग-2" },
    { nameEn: "Shri Tilochan Yadav", nameHi: "श्री त्रिलोचन यादव", roleEn: "Laboratory Technician", roleHi: "प्रयोगशाला तकनीशियन" },
    { nameEn: "Shri Hemant Sahu", nameHi: "श्री हेमंत साहू", roleEn: "Peon / Attendant", roleHi: "भृत्य" }
  ];

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
              <p className="font-semibold text-primary">Qualification: M.Sc., Assistant Professor</p>
              <p>
                {language === "hi"
                  ? "प्रो. बी. के. पटेल को उच्च शिक्षा प्रशासन और अध्यापन का वृहद अनुभव प्राप्त है। उन्होंने छत्तीसगढ़ शासन के विभिन्न प्रतिष्ठित महाविद्यालयों में प्रशासनिक पदों पर कार्य किया है।"
                  : "Prof. B. K. Patel has extensive experience in higher education administration and teaching. He has worked in administrative positions at various prestigious government colleges in Chhattisgarh."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold justify-center md:justify-start">
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                principal@saragaoncollege.in
              </span>
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                +91 7750 - XXXXXX
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
