import { MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, telHref } from "@/content/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { locations } from "@/content/locations";

/**
 * Persistent mobile action bar. The layout adds matching bottom padding so it
 * never covers page content.
 */
export function MobileActionBar() {
  const items = [
    { label: "Call", href: telHref, icon: Phone, external: false },
    {
      label: "WhatsApp",
      href: generalEnquiryLink(),
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Directions",
      href: locations[0]?.directionsUrl ?? "#",
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/98 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <nav aria-label="Quick contact" className="grid grid-cols-3">
        {items.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-medium text-ink transition-colors hover:bg-secondary"
          >
            <Icon aria-hidden="true" className="size-5 text-primary" />
            <span>
              {label}
              <span className="sr-only">
                {label === "Call" ? ` ${clinic.name} on ${clinic.phoneDisplay}` : ` ${clinic.name}`}
              </span>
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
