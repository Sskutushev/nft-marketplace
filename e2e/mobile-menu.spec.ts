import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 12'] });

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open and close mobile menu', async ({ page }) => {
    // Найти burger button
    const burgerButton = page.getByLabel('Open menu');
    await expect(burgerButton).toBeVisible();

    // Открыть меню
    await burgerButton.click();

    // Проверить, что меню видимо
    const menu = page.locator('[class*="BurgerMenu_menu"]');
    await expect(menu).toHaveClass(/open/);

    // Закрыть меню
    const closeButton = page.getByLabel('Close menu');
    await closeButton.click();

    // Проверить, что меню скрыто
    await expect(menu).not.toHaveClass(/open/);

  });

  test('should navigate using mobile menu', async ({ page }) => {
    const burgerButton = page.getByLabel('Open menu');
    await burgerButton.click();

    // Клик по ссылке в меню
    await page.getByText('DISCOVER').click();

    // Проверить, что меню закрылось (опционально)
    // await expect(menu).not.toHaveClass(/open/);

  });
});