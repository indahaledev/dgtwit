$('#tweetFeed').jTweetsAnywhere({
	searchParams: ['q=FOTD, from:dairygodmother source:web'],
	searchParams: ['q=%3A -http* -pops -summer -school -Christmas, from:dairygodmother source:facebook'],
    count: 1,
	showTweetFeed: {
			showTwitterBird: false,
			showTimestamp: false,
			showUserScreenNames: false,
			showProfileImages: false
		}
	});
	var i=0;
	for (i=0;i<=5;i++)
		{
		$('#tweetFeed').fadeIn(1500).delay(3500).fadeOut(1500);
		}
		$('#tweetFeed').fadeIn(1500);
		