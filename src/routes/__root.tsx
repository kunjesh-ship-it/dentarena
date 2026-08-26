import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Cursor } from "@/components/layout/Cursor";
import { clinic } from "@/content/clinic";
import { jsonLd, organizationSchema } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl">We couldn&rsquo;t find that page</h1>
        <p className="mt-4 text-sm leading-relaxed">
          The page may have moved. You can head back to the homepage, or browse our treatments.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
          <Link
            to="/treatments"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-input px-5 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            Browse treatments
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl">This page didn&rsquo;t load</h1>
        <p className="mt-4 text-sm leading-relaxed">
          Something went wrong on our end. Please try again, or call us on {clinic.phoneDisplay}.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-input px-5 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${clinic.name} — Dental Clinic in Surat` },
      {
        name: "description",
        content: `${clinic.name} is a dental clinic with branches in Bhatar and Vesu, Surat.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: clinic.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F5D62" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [jsonLd(organizationSchema())],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-primary-foreground"
      >
        Skip to main content
      </a>
      <Cursor />
      <div className="flex min-h-dvh flex-col main-section">
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 pb-0 pb-sm-20 outline-none md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <MobileActionBar />
    </QueryClientProvider>
  );
}
