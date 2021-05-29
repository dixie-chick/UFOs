# UFOs
Javascript and HTML

## Greetings Earthlings
This analysis uses JavaScript and HTML to organize UFO data stored as an array into an interactive dashboard. Functions are created to allow filters on the table across date, city, state, country and shape. 

Results: Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation.

## Take Me To Your Leader.. (Or Java/HMTL Process)
The initial webpage included  a date filter which could be applied to the table, however this limited the search function. Additional functions were created to include city, state, country and shape into the filter.
```
function updateFilters() {  
    let changedElement = d3.select(this);
    let changedValue = changedElement.property("value");
    let filterID = changedElement.property("id");
    if (changedValue){
      filters[filterID] = changedValue;
    }
    else{
      delete filters [filterID];
    }
    filterTable();
  
  }
```

Then, a function was called to apply all the filters
  ```
  function filterTable() {
      let filteredData = tableData;
      Object.entries(filters).forEach(([filterID, changedValue]) => {
        filteredData = filteredData.filter(row => row[filterID] === changedValue);
    });
 ```
 Finally, a table was re-built
 ```
     buildTable(filteredData);
  }
  ```
  
  
  ## See it in Action
  ### Unfiltered
  ![unfiltered](https://user-images.githubusercontent.com/79612565/120055924-eaa88880-bfed-11eb-92fa-42c8372224ee.png)

  ### Filtered Focusing on El Cajon in California
![filtered](https://user-images.githubusercontent.com/79612565/120055930-fc8a2b80-bfed-11eb-80e9-0d3e668610df.png)


## Code long and prosper
The refactoring of the code to include several other filters is a huge improvement. Users can input by several different choices and see full results, or narrow down. At the current time, users cannot include their own input into the database. A major improvement would be to have an input field based off the current table to further the findings. Eventually when enough data is captured, the results could be formatted into a graph using Plotly to show high areas or dates of UFO sightings. 
Additionally, users are not able to download the table to their own device in it's current state, so enabling a download feature link could be useful to keep webpage traffic high. 

![beam me up](https://user-images.githubusercontent.com/79612565/120056286-f85f0d80-bfef-11eb-8d14-9afd4ed530fe.jpeg)

