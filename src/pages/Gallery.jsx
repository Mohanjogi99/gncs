import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Gallery() {
  const { gallery, language, t } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null); // photo object for lightbox modal

  // Extract unique events or albums to filter by
  const filterCategories = ["All", "Annual Day", "Science Day", "Yoga Day"];

  const filteredPhotos = gallery.filter((photo) => {
    if (activeFilter === "All") return true;
    return photo.albumTitle.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "चित्र दीर्घा (गैलरी)" : "Campus Photo Gallery"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Captured memories of events & activities
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="flex flex-wrap gap-2 justify-center">
        {filterCategories.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs sm:text-sm px-4 py-2 rounded-full font-bold border transition-all ${
              activeFilter === filter
                ? "bg-secondary text-white border-secondary shadow-sm"
                : "bg-white hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
            }`}
          >
            {filter === "All" ? (language === "hi" ? "सभी चित्र" : "All Photos") : filter}
          </button>
        ))}
      </section>

      {/* Responsive Grid Layout */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.length === 0 ? (
          <p className="col-span-full py-12 text-center text-on-surface-variant italic">
            No photos found in this category.
          </p>
        ) : (
          filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-3xl border border-outline-variant/60 overflow-hidden shadow-sm hover:shadow-md hover:border-secondary hover:scale-[1.01] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img
                  src={photo.imageUrl}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-5 border-t border-outline-variant/40 space-y-1">
                <span className="text-[10px] text-secondary font-bold block uppercase">
                  {photo.eventDate}
                </span>
                <h4 className="font-bold text-xs sm:text-sm text-primary line-clamp-1">
                  {photo.albumTitle}
                </h4>
                <p className="text-[11px] text-on-surface-variant line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Lightbox Modal Overlay */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex flex-col justify-center items-center p-4 transition-all duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-secondary-container bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            title="Close Lightbox"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Lightbox Content Card */}
          <div
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85dvh]"
            onClick={(e) => e.stopPropagation()} // Stop overlay click closing when clicking inside
          >
            <div className="flex-1 overflow-auto bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[60dvh] object-contain"
              />
            </div>
            <div className="p-6 space-y-2 border-t border-outline-variant bg-surface">
              <div className="flex justify-between items-center gap-4">
                <h4 className="font-bold text-base sm:text-lg text-primary leading-tight">
                  {selectedPhoto.albumTitle}
                </h4>
                <span className="text-xs bg-secondary text-white px-2.5 py-1 rounded-full font-bold shrink-0">
                  {selectedPhoto.eventDate}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
