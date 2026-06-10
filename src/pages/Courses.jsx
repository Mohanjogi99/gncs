import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Courses() {
  const { courses, language, t } = useContext(AppContext);

  const ugCourses = courses.filter((c) => !c.level || c.level === "UG");
  const pgCourses = courses.filter((c) => c.level === "PG");

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "पाठ्यक्रम एवं सीट विवरण" : "Courses & Fee Structure"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • seat intake, eligibility and fees
        </p>
      </section>

      {/* UG Courses Table Section */}
      <section className="bg-white rounded-3xl border border-outline-variant/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/60 flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-primary">
              {language === "hi" ? "स्नातक पाठ्यक्रम" : "Undergraduate Programs"}
            </h3>
            <p className="text-xs text-on-surface-variant">Regular full-time courses offered for session 2026-27</p>
          </div>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase">
            Regular Co-Ed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr className="text-xs font-bold text-on-surface-variant uppercase">
                <th className="px-6 py-4">{t("stream")} | संकाय</th>
                <th className="px-6 py-4">{t("duration")}</th>
                <th className="px-6 py-4">{t("seats")}</th>
                <th className="px-6 py-4">{t("eligibility")}</th>
                <th className="px-6 py-4">{t("fee")}</th>
                <th className="px-6 py-4">{t("syllabus")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-xs sm:text-sm">
              {ugCourses.map((course) => (
                <tr key={course.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">{course.name}</td>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">{course.duration}</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full">{course.seats}</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant max-w-[200px] leading-relaxed">
                    {course.eligibility}
                  </td>
                  <td className="px-6 py-4 font-semibold text-secondary">{course.fee}</td>
                  <td className="px-6 py-4">
                    {course.syllabusUrl && (
                      <a
                        href={course.syllabusUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold hover:scale-[1.03] transition-all"
                      >
                        <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                        Syllabus
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PG Courses Table Section */}
      <section className="bg-white rounded-3xl border border-outline-variant/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/60 flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-primary">
              {language === "hi" ? "स्नातकोत्तर पाठ्यक्रम" : "Postgraduate Programs"}
            </h3>
            <p className="text-xs text-on-surface-variant">Postgraduate degree programs offered for session 2026-27</p>
          </div>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase">
            Regular Co-Ed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr className="text-xs font-bold text-on-surface-variant uppercase">
                <th className="px-6 py-4">{t("stream")} | संकाय</th>
                <th className="px-6 py-4">{t("duration")}</th>
                <th className="px-6 py-4">{t("seats")}</th>
                <th className="px-6 py-4">{t("eligibility")}</th>
                <th className="px-6 py-4">{t("fee")}</th>
                <th className="px-6 py-4">{t("syllabus")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-xs sm:text-sm">
              {pgCourses.map((course) => (
                <tr key={course.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">{course.name}</td>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">{course.duration}</td>
                  <td className="px-6 py-4 text-center font-bold text-primary">
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full">{course.seats}</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant max-w-[200px] leading-relaxed">
                    {course.eligibility}
                  </td>
                  <td className="px-6 py-4 font-semibold text-secondary">{course.fee}</td>
                  <td className="px-6 py-4">
                    {course.syllabusUrl && (
                      <a
                        href={course.syllabusUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold hover:scale-[1.03] transition-all"
                      >
                        <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                        Syllabus
                      </a>
                    )}
                  </td>
                </tr>
              ))}
              {pgCourses.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant italic">
                    {language === "hi" 
                      ? "स्नातकोत्तर स्तर पर नए पाठ्यक्रमों की अनुमति प्रक्रियाधीन है।"
                      : "No Postgraduate courses are currently listed or awaiting approval."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fee & Seat Reservation Guidelines */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-4">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/40 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">payments</span>
            Fee Rules | शुल्क संबंधी सामान्य नियम
          </h3>
          <ul className="text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-2 list-disc list-inside">
            {language === "hi" ? (
              <>
                <li>शुल्क का भुगतान ऑनलाइन पोर्टल या बैंक चालान द्वारा किया जा सकता है।</li>
                <li>आरक्षित वर्ग (एसटी/एससी/ओबीसी) के छात्रों को नियमानुसार छात्रवृत्ति अनुदान प्राप्त होने पर शुल्क में राहत दी जाती है।</li>
                <li>प्रवेश के समय लिया गया शुल्क रिफंडेबल नहीं होगा।</li>
                <li>प्रायोगिक विषयों के लिए अलग से शुल्क लागू हो सकता है।</li>
              </>
            ) : (
              <>
                <li>Fees can be paid online via the admission portal or through bank challan.</li>
                <li>Reserved categories (ST/SC/OBC) may qualify for scholarship fee waivers as per government norms.</li>
                <li>Fees paid at the time of admission are non-refundable.</li>
                <li>Special laboratory fees may apply for experimental science subjects.</li>
              </>
            )}
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/40 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">verified_user</span>
            Seat Intake & Future Expansion
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {language === "hi"
              ? "महाविद्यालय में शासन के दिशा-निर्देशानुसार सीटों में वृद्धि की जा सकती है। भविष्य में स्नातकोत्तर (एम.ए., एम.एससी., एम.कॉम.) और स्व-वित्तीय व्यावसायिक पाठ्यक्रमों के विस्तार का प्रस्ताव राज्य उच्च शिक्षा विभाग को प्रेषित किया गया है।"
              : "Seat intake is subject to expansion based on directions from the State Higher Education Department. Proposal for introducing Post Graduate courses (M.A., M.Sc., M.Com.) has been submitted for approval in future academic terms."}
          </p>
          <div className="pt-2">
            <Link
              to="/admission"
              className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-bold text-xs"
            >
              {language === "hi" ? "प्रवेश प्रक्रिया की जानकारी देखें" : "Read Admission Guidelines"}
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
