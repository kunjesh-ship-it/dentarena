import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { getLocation } from "@/content/locations";
import { confirmed, type Doctor } from "@/content/types";
import { useCursorStore } from "@/hooks/useCursorStore";
import { cn } from "@/lib/utils";

export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 2.5C4.5 2.5 2.5 4.5 2.5 7.5C2.5 11 4 15 5 18C5.8 20.2 7 22 8.5 22C10 22 10.5 19 12 19C13.5 19 14 22 15.5 22C17 22 18.2 20.2 19 18C20 15 21.5 11 21.5 7.5C21.5 4.5 19.5 2.5 17 2.5C14.5 2.5 13.5 4.5 12 4.5C10.5 4.5 9.5 2.5 7 2.5Z" />
      <path d="M9.5 7.5C10.2 8.5 11.1 9 12 9C12.9 9 13.8 8.5 14.5 7.5" />
    </svg>
  );
}

export function DoctorCard({ doctor, className }: { doctor: Doctor; className?: string }) {
  const { setVariant } = useCursorStore();
  const photo = confirmed(doctor.photo);
  const qualifications = confirmed(doctor.qualifications);
  const branches = doctor.locationIds
    .map((id) => getLocation(id)?.shortName)
    .filter(Boolean)
    .join(" and ");
  const initials = doctor.name
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <article
      onMouseEnter={() => setVariant("image")}
      onMouseLeave={() => setVariant("default")}
      className={cn(
        "group relative flex flex-col sm:flex-row h-full rounded-[1.75rem] border border-border/80 bg-card p-4 sm:p-5 gap-5 sm:gap-6 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Photo column */}
      <div className="relative w-full sm:w-[46%] md:w-[48%] shrink-0 aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
        {/* Tooth badge icon */}
        <div className="absolute top-3 left-3 z-10 size-9 sm:size-10 rounded-xl bg-[#004d5a] text-white flex items-center justify-center shadow-md">
          <ToothIcon className="size-5 text-white" />
        </div>

        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            className={cn("w-full h-full object-cover", photo.className)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-warm px-5 text-center">
            <span
              aria-hidden="true"
              className="grid size-16 place-items-center rounded-full bg-background font-display text-lg font-semibold text-primary"
            >
              {initials}
            </span>
            <span className="text-xs leading-relaxed text-muted-foreground">
              Photograph awaiting clinician approval
            </span>
          </div>
        )}
      </div>

      {/* Details column */}
      <div className="flex flex-1 flex-col justify-between py-1">
        <div>
          <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold text-ink leading-tight">
            <Link
              to="/doctors/$slug"
              params={{ slug: doctor.slug }}
              className="hover:text-primary transition-colors block"
            >
              {doctor.name.includes(" M. Shah") ? (
                <>
                  <span className="block">{doctor.name.replace(" M. Shah", "")}</span>
                  <span className="block">M. Shah</span>
                </>
              ) : (
                doctor.name
              )}
            </Link>
          </h3>

          <div className="mt-5 space-y-4 text-xs sm:text-sm">
            {/* Qualifications */}
            <div className="flex items-start gap-3">
              <div className="size-7 rounded-full bg-[#f0f7f9] flex items-center justify-center text-[#004d5a] shrink-0 mt-0.5">
                <GraduationCap className="size-4 text-[#004d5a]" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-muted-foreground">
                  Qualifications
                </div>
                <div className="mt-0.5 font-medium text-foreground leading-snug">
                  {qualifications ? (
                    qualifications.map((qualification, index) => (
                      <div key={index}>{qualification}</div>
                    ))
                  ) : (
                    <span className="text-muted-foreground italic">Awaiting confirmation</span>
                  )}
                </div>
              </div>
            </div>

            {/* Practises at */}
            <div className="flex items-start gap-3">
              <div className="size-7 rounded-full bg-[#f0f7f9] flex items-center justify-center text-[#004d5a] shrink-0 mt-0.5">
                <MapPin className="size-4 text-[#004d5a]" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-muted-foreground">
                  Practises at
                </div>
                <div className="mt-0.5 font-medium text-foreground leading-snug">
                  {branches || "Bhatar and Vesu"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Profile Button */}
        <div className="mt-6 pt-2">
          <Link
            to="/doctors/$slug"
            params={{ slug: doctor.slug }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#004d5a] hover:bg-[#003842] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:gap-3 group/btn"
          >
            <span>View profile</span>
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
