import { test, expect } from '@playwright/test';

test('Search made by Codegen', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('Pug');
    await page.getByLabel('Buscar con Google').first().click();
    await page.getByRole('link', { name: 'Pug - Wikipedia, la' }).click();
    // await page.waitForTimeout(5000)
});

test('Search made by Codegen - Voy a tener suerte', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('Pug');
    await page.getByLabel('Voy a tener suerte').first().click();
    // await page.waitForTimeout(5000)
});

test('Tendencias - Click en primer tendencia', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const searchBar = await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByRole('listbox')
    await page.locator('li').getByRole('presentation').first().click()
})