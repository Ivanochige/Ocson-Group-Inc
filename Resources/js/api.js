const scriptURL = "https://script.google.com/macros/s/AKfycbyvNz_joKiCLnj53DBiyF5RvgUCcUtVxcMRPAVt7YIJ6godavpmzN98HOXUp0QOoGWX/exec";

function getData(sheet) {
  return fetch(scriptURL + "?sheet=" + sheet)
         .then(res => res.json());
}

function postData(sheet, row) {
  return fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ sheet: sheet, row: row })
  });
}

//Fetching Users from Google Sheets and logging to console//

function fetchUsers() {
  fetch(scriptURL + "?sheet=Users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
//End of Fetching Users from Google Sheets and logging to console//

//Fetching Sales from Google Sheets and logging to console//
function fetchSales() {
  fetch(scriptURL + "?sheet=Sales")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
//End of Fetching Sales from Google Sheets and logging to console//

//Fetching Inventory from Google Sheets and logging to console//
function fetchInventory() {
  fetch(scriptURL + "?sheet=Inventory")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
//End of Fetching Inventory from Google Sheets and logging to console//

//Fetching transactions Data from Google Sheets and logging to console//
function fetchTransactions() {
  fetch(scriptURL + "?sheet=Transactions")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
//End of Fetching transactions Data from Google Sheets and logging to console//