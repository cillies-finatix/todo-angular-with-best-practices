import { expect, test } from '@playwright/test';

test.describe('todo overview', () => {
  test('adds a todo via the form and shows it in the list', async ({ page }) => {
    await page.goto('/todo-overview');

    await expect(page.getByText('Keine Todos vorhanden.')).toBeVisible();

    await page.getByLabel('Todo Namen eingeben').fill('Smoke test todo');
    await page.getByRole('button', { name: 'Erstellen' }).click();

    await expect(
      page.getByRole('listitem').filter({ hasText: 'Smoke test todo' })
    ).toBeVisible();
    await expect(page.getByText('Smoke test todo / offen')).toBeVisible();
  });
});
