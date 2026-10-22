import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomePage } from '@/components/home-page'

describe('home page', () => {
  it('shows the template introduction and framework documentation link', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /solid foundation for your next product/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /your app starts here/i })).toHaveAttribute(
      'href',
      'https://tanstack.com/start/latest/docs/framework/react/getting-started',
    )
  })
})
