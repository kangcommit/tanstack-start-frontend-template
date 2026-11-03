import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Frontend Template',
      },
      {
        name: 'description',
        content: 'A production-ready TanStack Start application.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-3 px-6 py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">The page you requested does not exist.</p>
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col items-start justify-center gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-muted-foreground">The page could not be loaded. Please try again.</p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
