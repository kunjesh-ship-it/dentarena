import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { footerNav } from "@/config/nav";
import { clinic, telHref } from "@/content/clinic";
import { formatAddress, locations } from "@/content/locations";
import { Reveal } from "@/components/common/Reveal";
import { WordmarkFooter } from "./WordmarkFooter";


export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-secondary/85">
      <Reveal isStaggerParent>
        <Container className="py-14">
          <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div>
            <WordmarkFooter tone="default" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{clinic.intro}</p>
            <a
              href={telHref}
              className="mt-5 inline-flex min-h-11 items-center text-base font-semibold text-secondary underline-offset-4 hover:underline"
              aria-label={`Call Dent Arena on ${clinic.phoneDisplay}`}
            >
              {clinic.phoneDisplay}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="font-display text-sm font-semibold tracking-wide text-secondary uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="inline-flex min-h-9 items-center text-sm underline-offset-4 hover:text-secondary hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          </Reveal>

          <Reveal delay={150} className="mt-12 grid gap-8 border-t border-secondary/15 pt-10 sm:grid-cols-2">
          {locations.map((location) => (
            <div key={location.id}>
              <h3 className="font-display text-base font-semibold text-secondary">
                {location.name}
              </h3>
              <address className="mt-2 text-sm leading-relaxed not-italic">
                {formatAddress(location).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <Link
                to="/locations/$branch"
                params={{ branch: location.slug }}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Branch details
                <span className="sr-only"> — {location.name}</span>
              </Link>
            </div>
          ))}
        </Reveal>

          <Reveal delay={250} className="mt-10 flex flex-col gap-3 border-t border-secondary/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {clinic.name}. All rights reserved.
          </p>
          <p className="max-w-xl">
            Information on this website is general in nature and is not a substitute for a dental
            examination or personal clinical advice.
          </p>
          </Reveal>
        </Container>
      </Reveal>
    </footer>
  );
}
