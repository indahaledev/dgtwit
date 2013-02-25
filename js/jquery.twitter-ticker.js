var TwitterTicker = new function() {

  var options = {
    username: 'indahale',
    limit: 5
  };

  var url = 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + 
             options.username + '&count=' + options.limit + '&callback=?';
             
             
  var relativeTime = function(time_value) {
      var values = time_value.split(" ");
      time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      delta = delta + (relative_to.getTimezoneOffset() * 60);

      if (delta < 60) {
    	return 'less than a minute ago';
  	  } else if(delta < 120) {
        return 'about a minute ago';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
      } else if(delta < (120*60)) {
        return 'about an hour ago';
      } else if(delta < (24*60*60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        return '1 day ago';
      } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
      }
    };
    
    var replaceURLs = function(text) {
    
      var replaced = text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ');
      
      return replaced;
    
    
    
    };

             
             
  var fetch = function() {
  
    
    
    $.getJSON(url, function(data) {
        
        var htmlString = '';
               
        $.each(data, function(i, item) {
        
          var tweet = replaceURLs(item.text);
          var time = relativeTime(item.created_at);
          
          htmlString += '<div class="tweet">' + tweet +
                        '</div>';
        
        });
      
      
      $(htmlString).appendTo('#twitter'); 
      
      run();
      
    });
         
  };
  
  var run = function() {
  
  
    
    var tweets = $('div.tweet', '#twitter');
    var limit = tweets.length;
    var index = 0;
    
    var timer = setInterval(function() {
    
      var that = this;
    
      index++;
      
      if(index == limit) {
      
        index = 0;
      
      
      }
    
     tweets.eq(index).slideDown(2000).
     siblings().hide().end().mouseover(function() {
     
       clearInterval(timer)
     
     }).click(function() {
     
       tweets.hide();
     
       run();
     
     });
    
    }, 4000);
        
  
  
  
  };
  
  this.init = function() {
  
    fetch();
  
  };

}();

$(function() {

  TwitterTicker.init();

});