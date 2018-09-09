
var infoBtn = document.querySelector(".button input");
var arrFeed = [];

// when add button is clicked 
infoBtn.addEventListener('click', function(e){

    // run a function which should add the heading and description of the input box into a new object
    var heading = document.getElementById("heading").value;
    var description = document.getElementById("description").value;
    var newsItem = {
        headingVal : heading,
        descriptionVal : description
    };

    // add this newsItem object into an array of feed (means list of newsItems)
    arrFeed.push(newsItem);

    console.log(arrFeed);
    
    // display all the headings in the arrFeed to the display box 

    // 1. Select the display box
    var display = document.getElementById("feed");

    // 2. loop through arrFeed


    arrFeed.forEach(function(newsItem){
    // add more items
    console.log(newsItem);

    

    // 3. Take the heading property from single Item and store it in a variable
    var heading = newsItem.headingVal;

    var storeFeed = " ";

    storeFeed.innerHTML = headingVal;

    });
    

    // 4. Find the innerHTML (content) of display box
    


    // 5. Add the latest heading to the innerHTML of display box



});



