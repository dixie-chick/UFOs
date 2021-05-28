// ---- 11.2.4 Import the data from data.js -----//
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// ----- 11.5.1 Start to build the Dynamic Table ----- //
// Use standard function to nest functions rather than a fat arrow
// Clear data from data.js with new table 
function buildTable(data) {
    // use tbody.html(''); to reference table in the html page, use ('') to create an empty string
  tbody.html("");

    // 11.5.2 Add forEach function, use arrow to clean up code
  data.forEach((dataRow) => {
// create a variable that will append a row to the table body
// tells JS to find <tbody> tag within HTML and add a table row ("tr")
      let row =tbody.append("tr");
    //});
    // Loop through the data Rows using dataRow, these fileds become table and wrapped in <td> tags
  Object.values(dataRow).forEach((val) => {
    //});
    // append each value of the objec to a cell in the table
    // append data into a table tada tag <td>
    let cell = row.append("td");
    // create a variable that holds only each value from the object
    cell.text(val);
    }
  );
});
}

// --- 11.5.3 Add Filters --
// 1. create a new function to handle after input is given
function handleClick(){
  // 2. create a few varialbes to hold date data both filterd and unfiltered
  //.select() will select first element that matches string #datetime
  // this tells D3 to look for #datetime id in HTML tags
  let date = d3.select("#datetime").property("value");

  // 3. set a default filter and save it to a new variable
  let filterdData = tableData;


// --- 11.5.4 Use 'if' statement ---
//If there is a date already set, then use that date as a filter. If not, then return the default data
  if (date) { 
  ///Show only the rows where the date is equal to the date filter we created above
    filteredData = filteredData.filter(row => row.datetime ==== date);
  }

// call the buildTable() function to build the table using the filtered data
  buildTable(filteredData);
}

// Listen for "click"
// selector string on HTML tag "filter-btn"
// adding .on(click, handleClick) tells D3 to execute handleClick
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the Final Table
buildTable(tableData);
