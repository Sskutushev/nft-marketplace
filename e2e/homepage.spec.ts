import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with navigation', async ({ page }) => {
    // Проверяем наличие header
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Проверяем навигацию
    await expect(page.getByText('DISCOVER')).toBeVisible();
    await expect(page.getByText('CREATORS')).toBeVisible();
    await expect(page.getByText('SELL')).toBeVisible();
    await expect(page.getByText('STATS')).toBeVisible();

  });

  test('should display hero section', async ({ page }) => {
    // Проверяем заголовок
    await expect(page.getByText('Discover And Create NFTs')).toBeVisible();

    // Проверяем кнопки
    await expect(page.getByText('EXPLORE MORE')).toBeVisible();
    await expect(page.getByText('CREATE NFT')).toBeVisible();

  });

  test('should display NFT carousel', async ({ page }) => {
    // Ждем загрузки карточек
    await page.waitForSelector('[class*="NFTCard"]', { timeout: 10000 });

    // Проверяем наличие карточек
    const cards = page.locator('[class*="NFTCard"]');
    await expect(cards.first()).toBeVisible();

  });

  test('should display footer', async ({ page }) => {
    // Скролл вниз
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Проверяем footer
    await expect(page.getByText('DiveSea')).toBeVisible();
    await expect(page.getByText(/© 2023 DiveSea/)).toBeVisible();

  });
});