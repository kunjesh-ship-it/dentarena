import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatAddress } from "@/content/locations";
import { confirmed, type Location } from "@/content/types";
import { telHref } from "@/content/clinic";

export function LocationCard({ location }: { location: Location }) {
  const hours = confirmed(location.hours);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-xl font-semibold text-ink">{location.name}</h3>
      <address className="mt-3 text-sm leading-relaxed not-italic">
        {formatAddress(location).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <dl className="mt-4 text-sm">
        <dt className="text-muted-foreground">Opening hours</dt>
        <dd className="mt-1">
          {hours ? (
            <ul className="space-y-1">
              {hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-ink">{h.days}</span> &mdash; {h.hours}
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-muted-foreground italic">
              Opening hours to be confirmed by the clinic
            </span>
          )}
        </dd>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button asChild size="sm">
          <Link to="/locations/$branch" params={{ branch: location.slug }}>
            Branch details
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" />
            Get directions
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <a href={telHref}>
            <Phone aria-hidden="true" />
            Call
          </a>
        </Button>
      </div>
    </article>
  );
}
