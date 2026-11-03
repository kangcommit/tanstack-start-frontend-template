import { ArrowRight } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center px-6 py-16">
      <div className="max-w-2xl space-y-6">
        <p className="text-muted-foreground text-sm font-medium">TanStack Start template</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A solid foundation for your next product.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Server rendering, type-safe file routes, Tailwind CSS, and shadcn/ui components powered by
          Base UI are ready to customize.
        </p>
        <a
          href="https://tanstack.com/start/latest/docs/framework/react/getting-started"
          className={buttonVariants({ size: 'lg' })}
          target="_blank"
          rel="noreferrer"
        >
          Your app starts here
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </a>
      </div>
    </main>
  )
}
