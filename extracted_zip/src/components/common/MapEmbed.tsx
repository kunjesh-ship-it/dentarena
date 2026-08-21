import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { confirmed, type Location } from "@/content/types";

export function MapEmbed({ location }: { location: Location }) {
  const embed = confirmed(location.mapEmbedUrl);

  if (embed) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <iframe
          src={embed}
          title={`Map showing ${location.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-input bg-secondary/60 p-6 text-center">
      <MapPin aria-hidden="true" className="size-6 text-primary" />
      <p className="text-sm">
        Map embed for {location.shortName} will appear here once the clinic confirms its Google Maps
        listing.
      </p>
      <Button asChild size="sm" variant="outline">
        <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
          Open directions in Maps
        </a>
      </Button>
    </div>
  );
}
