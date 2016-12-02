// use jQuery to select the HMTL element we're going to manipulate
var HomeButtonGo = $('#home button')
var eraDropdown = $ ('#era')
var genreDropdown = $ ('#genre')
var HomeSection = $('#home')
var ResultsSection = $('#results')
var resultsOL = $('#results ol')
var ResultsBackButton = $ ("#results .back")
var resultsToggleButton = $ ("#results .toggle")
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')

// define the resultsList outside of any function 
var resultsList = []

//tell the button to do somehting when clicked
HomeButtonGo.click(function(){
    
    //capture the user chosen option 
    var chosenEra = eraDropdown.val()
    var chosenGenre = genreDropdown.val()
    console.log("You Picked " + chosenEra + " and " + chosenGenre)
    
    var filters = 
        [
            {
                key:'genre',
                value: chosenGenre
            },
            {
                key: chosenEra
                
            }
            
        ]
    
    // filter+sort people by user selection
    resultsList = filterAndSortList (albumsList, filters);
    console.log(resultsList);
    

    // show the results in the #results section
    showList(resultsList, resultsOL);
    //addMarkers(resultsList)

    
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        ResultsSection.hide()
        detailsSection.show()
   })
    
   HomeSection.hide()
   ResultsSection.show()
    
   


})

//back button 
ResultsBackButton.click(function(){
   ResultsSection.hide()
   HomeSection.show()
})


//back button 
detailsBackButton.click(function(){
   detailsSection.hide()
   ResultsSection.show()
})

//button to switch between 
resultsToggleButton.click( function() {
    
    console.log('resultsToggleButton')
    
    //find out which element is currently visible
    //is it the map or the list?
    //if it's the map, we want to show the list
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false
    
    console.log(isListVisible)
    //if the list is visible
    if (isListVisible)
    {
        //show map and hide list
        resultsMap.show()
        map.resize()//take up the the available space
        resultsOL.hide()
        
    }
    else
    {
        //we want to show the list and hide map s
        resultsOL.show()
        resultsOL.hide()
    }
})




$(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });