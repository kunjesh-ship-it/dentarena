import { Link } from "@tanstack/react-router";
import { getLocation } from "@/content/locations";
import { confirmed, type Doctor } from "@/content/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const photo = confirmed(doctor.photo);
  const role = confirmed(doctor.role);
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-[transform,box-shadow]  hover:-translate-y-1 hover:shadow-soft">
      <div className="p-3 pb-0">
        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            className="mask-arch inner-hairline aspect-4/5 w-full object-cover"
          />
        ) : (
          <div className="mask-arch inner-hairline flex aspect-4/5 w-full flex-col items-center justify-center gap-3 bg-surface-warm px-5 text-center">
            <span
              aria-hidden="true"
              className="grid size-20 place-items-center rounded-full bg-background font-display text-xl font-semibold text-primary"
            >
              {initials}
            </span>
            <span className="text-xs leading-relaxed text-muted-foreground">
              Photograph awaiting the clinician&rsquo;s approval
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-3">
          <Link
            to="/doctors/$slug"
            params={{ slug: doctor.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {doctor.name}
          </Link>
        </h3>
        <p className="mt-2 smallcaps text-muted-foreground">{role ?? "Dentist at Dent Arena"}</p>

        <dl className="mt-5 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">Qualifications</dt>
            <dd className="min-w-0">
              {qualifications ? (
                qualifications.join(", ")
              ) : (
                <span className="text-muted-foreground italic">Awaiting confirmation</span>
              )}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">Practises at</dt>
            <dd className="min-w-0">{branches}</dd>
          </div>
        </dl>

        <span className="mt-6 text-sm font-medium text-primary">View profile</span>
      </div>
    </article>
  );
}
