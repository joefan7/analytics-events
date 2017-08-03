$(document).ready(function () {
    // Global Variables
    var highestScrollPercent    = 0
    var link1HoverDuration      = 0
    var link2HoverDuration      = 0
    var picture1HoverDuration   = 0
    var picture2HoverDuration   = 0
    var textAreaHoverDuration   = 0
    var vowelCharCodes          = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117]
    var vowelCount              = 0
    var url                     = ''

    // Format time from miliseconds
    function formatTimeOfDay(miliSecondsIn) {
        var secondsIn = (miliSecondsIn / 1000) | 0;
        var secondsInDay = ((secondsIn % 86400) + 86400) % 86400;
        var seconds = secondsInDay % 60;
        var minutes = ((secondsInDay / 60) | 0) % 60;
        var hours = (secondsInDay / 3600) | 0;
        return hours + (minutes < 10 ? ":0" : ":") // Shorthand conditionals
            + minutes + (seconds < 10 ? ":0" : ":")
            + seconds;
    }
    // Find scroll percentage
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()
        var docHeight = $(document).height()
        var winHeight = $(window).height()
        var scrollPercent = (scrollTop) / (docHeight - winHeight)
        var scrollPercentRounded = Math.round(scrollPercent * 100)
        if (highestScrollPercent < scrollPercentRounded) {
            highestScrollPercent = scrollPercentRounded
        }
    })

    // Hover Duration link1 --- see new Date() (Moment.js library)
    $("#link1").hover(function () {
        hoverStart = $.now()
    }, function () {
        hoverStop = $.now()
        link1HoverDuration = link1HoverDuration + (hoverStop - hoverStart)
        // console.log('l1',formatTimeOfDay(link1HoverDuration))
    })

    // Hover Duration link2 
    $("#link2").hover(function () {
        hoverStart = $.now()
    }, function () {
        hoverStop = $.now()
        link2HoverDuration = link2HoverDuration + (hoverStop - hoverStart)
        // console.log('l2',formatTimeOfDay(link2HoverDuration))
    })

    // Hover Duration picture1
    $("#picture1").hover(function () {
        hoverStart = $.now()
    }, function () {
        hoverStop = $.now()
        picture1HoverDuration = picture1HoverDuration + (hoverStop - hoverStart)
        // console.log('p1',formatTimeOfDay(picture1HoverDuration))
    })

    // Hover Duration picture2
    $("#picture2").hover(function () {
        hoverStart = $.now()
    }, function () {
        hoverStop = $.now()
        picture2HoverDuration = picture2HoverDuration + (hoverStop - hoverStart)
        // console.log('p2',formatTimeOfDay(picture2HoverDuration))
    })

    // Hover Duration textArea
    $("#textArea").hover(function () {
        hoverStart = $.now()
    }, function () {
        hoverStop = $.now()
        textAreaHoverDuration = textAreaHoverDuration + (hoverStop - hoverStart)
        // console.log('ta', formatTimeOfDay(textAreaHoverDuration))
    })

    $("#textArea").keypress(function (event) {
        if (vowelCharCodes.indexOf(event.charCode) > -1) {
            vowelCount = vowelCount + 1
            //   console.log('vowel entered ' + event.charCode + 'vowels so far ' + vowelCount)
        }
    })

    $('a').click(function (event) {
        url = $(this).attr('href')
        // console.log(url)
    })

    start = $.now()

    $(window).on('beforeunload', function () {
        end = $.now()
        // console.log('Time Start: ', start)
        // console.log('Time End: ', end)
        // console.log('Time On Page: ', end - start)
        formattedTimeElapsed = formatTimeOfDay(end - start)
        console.log('Time On Page: ', formattedTimeElapsed)
        console.log('Percentage of page viewed: ', highestScrollPercent)
        console.log('Link 1 Hover Duration: ', formatTimeOfDay(link1HoverDuration))
        console.log('Link 2 Hover Duration: ', formatTimeOfDay(link2HoverDuration))
        console.log('Picture 1 Hover Duration: ', formatTimeOfDay(picture1HoverDuration))
        console.log('Picture 2 Hover Duration: ', formatTimeOfDay(picture2HoverDuration))
        console.log('Text Area Hover Duration: ', formatTimeOfDay(textAreaHoverDuration))
        console.log('Vowel entered into Text Area: ', vowelCount)
        console.log('Link Clicked: ', url)
    })
})

