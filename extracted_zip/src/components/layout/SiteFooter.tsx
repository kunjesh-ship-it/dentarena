import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { footerNav } from "@/config/nav";
import { clinic, telHref } from "@/content/clinic";
import { formatAddress, locations } from "@/content/locations";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-secondary/85">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div>
            <Wordmark tone="inverse" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{clinic.intro}</p>
            <a
              href={telHref}
              className="mt-5 inline-flex min-h-11 items-center text-base font-semibold text-secondary underline-offset-4 hover:underline"
            >
              {clinic.phoneDisplay}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-display text-sm font-semibold tracking-wide text-secondary uppercase">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm underline-offset-4 hover:text-secondary hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-secondary/15 pt-10 sm:grid-cols-2">
          {locations.map((location) => (
            <div key={location.id}>
              <h2 className="font-display text-base font-semibold text-secondary">
                {location.name}
              </h2>
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
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-secondary/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {clinic.name}. All rights reserved.
          </p>
          <p className="max-w-xl">
            Information on this website is general in nature and is not a substitute for a dental
            examination or personal clinical advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
