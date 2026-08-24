import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { primaryNav } from "@/config/nav";
import { clinic, telHref } from "@/content/clinic";
import { locations } from "@/content/locations";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function AnnouncementStrip() {
  return (
    <div className="bg-ink text-secondary">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs sm:text-sm">
        <p>Two dental practices in Surat &mdash; Bhatar and Vesu.</p>
        <a
          href={telHref}
          className="inline-flex min-h-11 items-center gap-2 font-medium underline-offset-4 hover:underline sm:min-h-0"
        >
          <Phone aria-hidden="true" className="size-4" />
          <span>
            Call <span className="sr-only">Dent Arena on </span>
            {clinic.phoneDisplay}
          </span>
        </a>
      </Container>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      // Return focus to the button that opened the menu
      menuButtonRef.current?.focus();
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !sheetRef.current) return;

      const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200",
        condensed
          ? "border-b border-border bg-background/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-background",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-[padding] duration-200",
          condensed ? "py-2.5" : "py-4",
        )}
      >
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  data-active="false"
                  activeProps={{ "data-active": "true" }}
                  className="link-underline inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink transition-colors hover:text-primary data-[active=true]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/book-appointment">Book an appointment</Link>
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            <Menu aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div
            id="mobile-nav"
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-background px-6 pt-5 pb-8 shadow-lift motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300"
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-ink hover:bg-secondary transition-colors"
              >
                <X aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-8">
              <ul className="flex flex-col gap-3">
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeProps={{ "data-active": "true" }}
                      className="flex min-h-11 items-center font-display text-[1.375rem] font-semibold text-ink data-[active=true]:text-primary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto rounded-[1.5rem] bg-surface-warm p-5">
              <p className="smallcaps text-muted-foreground">Get in touch</p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="whatsapp" className="w-full">
                  <a
                    href={generalEnquiryLink("Mobile menu")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={telHref}>
                    <Phone aria-hidden="true" />
                    Call {clinic.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <a
                    href={locations[0]!.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin aria-hidden="true" />
                    Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
