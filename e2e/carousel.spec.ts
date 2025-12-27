import { test, expect } from '@playwright/test';

test.describe('NFT Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    // Ждем загрузки карточек
    await page.waitForSelector('[class*="NFTCard"]', { timeout: 10000 });

  });

  test('should display NFT cards', async ({ page }) => {
    const cards = page.locator('[class*="NFTCard"]');
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);

  });

  test('should navigate carousel with buttons', async ({ page }) => {
    // Найти кнопки навигации
    const nextButton = page.locator('.swiper-button-next-custom');
    const prevButton = page.locator('.swiper-button-prev-custom');

    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();

    // Клик на next
    await nextButton.click();

    // Подождать анимацию
    await page.waitForTimeout(500);

    // Клик на prev
    await prevButton.click();

  });

  test('should display countdown timer on cards', async ({ page }) => {
    // Проверяем таймер на первой карточке
    const timer = page.locator('[class*="timer"]').first();
    await expect(timer).toBeVisible();

    // Таймер должен иметь формат XX:XX:XX
    const timerText = await timer.textContent();

    expect(timerText).toMatch(/\d{2}h \d{2}m \d{2}s/);
  });
});