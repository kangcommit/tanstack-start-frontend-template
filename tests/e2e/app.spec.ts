import { expect, test } from '@playwright/test'

test('renders the landing page and framework documentation link', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/tanstack start frontend template/i)
  await expect(
    page.getByRole('heading', { name: /a solid foundation for your next product/i }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Your app starts here' })).toHaveAttribute(
    'href',
    'https://tanstack.com/start/latest/docs/framework/react/getting-started',
  )
})

test('shows not-found for removed routes', async ({ page }) => {
  await page.goto('/about')

  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

test('serves the health route', async ({ request }) => {
  const healthResponse = await request.get('/health')
  await expect(healthResponse).toBeOK()
  expect(await healthResponse.json()).toEqual({ status: 'ok' })
})
