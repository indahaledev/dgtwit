$('#tweetFeed2').jTweetsAnywhere({
    username: ['dairygodmother'],
    count: 3,
	showTweetFeed: {
	        autorefresh: {
	            mode: 'auto-insert',
	            interval: 180
	        },
	       	showTimestamp: {
	            refreshInterval: 0
	        },
			showTwitterBird: false,
			showUserScreenNames: false,
			includeRetweets: false,
	    }
});