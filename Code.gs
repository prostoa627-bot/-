const SHEET_ID = '1H0oPMZGqf-sKwbRozzFtLoj_1_gQKXjmgwZSlHBuklk';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Случайный текст');
}

function getRandomText() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return 'Нет доступных текстов';
  }

  const values = sheet
    .getRange(2, 1, lastRow - 1, 1)
    .getValues()
    .flat()
    .map(String)
    .map((value) => value.trim())
    .filter((value) => value !== '');

  if (values.length === 0) {
    return 'Нет доступных текстов';
  }

  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
