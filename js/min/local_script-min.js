function getContent(n){var t="/templates/"+n+".html",e="#"+n;$(e).load(t)}function closeCalendar(){$("#calendar").hide()}function showCalendar(){$("#calendar").show()}getContent("footer"),getContent("calendar"),getContent("sponsors"),$(function(){var n=new Date(2019,9,27);$("#event-countdown").countdown({until:n})});