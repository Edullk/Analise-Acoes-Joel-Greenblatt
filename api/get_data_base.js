async function getDataBase() {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.fundamentus.com.br/resultado.php?interface=mobile&interface=classic"
  );
  await page.waitForSelector(".resultado");

  const data = await page.evaluate(() => {
    const headers = [];
    const table = document.querySelector(".resultado");
    const rows = table.querySelectorAll("tr");

    rows[0].querySelectorAll("th").forEach((header) => {
      headers.push(header.textContent.trim());
    });

    const data = [];

    for (let i = 1; i < rows.length; i++) {
      const row = {};
      const cells = rows[i].querySelectorAll("td");

      for (let j = 0; j < cells.length; j++) {
        row[headers[j]] = cells[j].textContent.trim();
      }

      if (Object.keys(row).length > 0) {
        data.push(row);
      }
    }

    return data;
  });
  await browser.close();
  return data;
}

module.exports = getDataBase;
