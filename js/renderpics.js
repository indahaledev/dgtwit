function renderpics(data)
{
	for( var i=0; i<data.results.length; i++ )
	{
		document.write( '<a href="' + data.results[i] + '"><img width="50" src="' + data.results[i].thumb + '"></a>' );
	}
}