const { test, expect } = require("@playwright/test");

import { random } from "./utils";

test.describe("Sign up form", () => {
  test("Shows all data on the confirmation page", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const name = random();
    const email = `e2e-test-${random()}@upgrade.com`;
    const password = random();
    const color = "black";

    await page.locator('input[name="name"]').fill(name);

    await page.locator('input[name="email"]').fill(email);

    await page.locator('input[name="password"]').fill(password);

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/more-info/);

    await page.locator('select[name="color"]').selectOption(color);

    await page.locator('input[name="terms"]').check();

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/confirmation/);

    await expect(page.locator("body")).toContainText(name);
    await expect(page.locator("body")).toContainText(email);
    await expect(page.locator("body")).toContainText(color);
    await expect(page.locator("body")).toContainText("Agreed");
  });

  test("Shows success page when every field is correct", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.locator('input[name="name"]').fill(random());

    await page
      .locator('input[name="email"]')
      .fill(`e2e-test-${random()}@upgrade.com`);

    await page.locator('input[name="password"]').fill(random());

    await page.click("button[type=submit]");

    await page.locator('select[name="color"]').selectOption("black");

    await page.locator('input[name="terms"]').check();

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/confirmation/);

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/success/);
  });

  test("Shows error page when fields have the wrong value", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    // The server returns http status code 400 when the name is "Error"
    await page.locator('input[name="name"]').fill("Error");

    await page
      .locator('input[name="email"]')
      .fill(`e2e-test-${random()}@upgrade.com`);

    await page.locator('input[name="password"]').fill(random());

    await page.click("button[type=submit]");

    await page.locator('select[name="color"]').selectOption("black");

    await page.locator('input[name="terms"]').check();

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/confirmation/);

    await page.click("button[type=submit]");

    await expect(page).toHaveURL(/error/);
  });
});
