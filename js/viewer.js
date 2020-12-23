(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-120714761-5', 'auto'); ga('set', 'anonymizeIp', true);
$(document).ready(function() {
    //Send page load event to GA
    ga('send', 'event', 'Load', 'Load_'+$("#pageViewHeader").text(), 'PageLoaded');
  });

  $(document).ready(function() {
    //Send button click event to GA
    $("button").click(function() {
       $(this).find("span").text("I was CLICKED");
ga('send', 'event', 'Click', 'Click_'+$(this).attr("id"), 'ButtonClickDetail');

    });
  });
