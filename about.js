$(document).ready(function(){
  getRedditJson();
});

//function to pull content from Reddit API
function getRedditJson(ajaxurl){
  $.ajax({
    method: 'GET',
    url: 'https://www.reddit.com/r/OrganizationPorn/new.json',
    dataType: 'json',
    success: onSuccess,
    error: onError
  })
}


function onSuccess(jsonReturn){
	
	//fade content in
	var fadeAmt = 800;

		//cycle through all items
	  for(var i=0; i<jsonReturn.data.children.length; i++) {

		var data = jsonReturn.data.children[i].data; 
		var datalink = 'http://www.reddit.com/'+data.permalink; //post link
		var dataimage = data.thumbnail; //image
		var title = data.title; //post title
		var subreddit = data.subreddit; //subreddit of post
		var author = data.author; //post author
		var caption = "Submitted by " +author; //caption

    

   //add link, image, and caption
    var posts = "<a style='cursor:pointer;' href='"+datalink+"'><section class='post-container'><article><img class='thumb' src='"+dataimage+"'></article><article><h3><a href='"+datalink+"'>"+title+"</a></h3><p>"+caption+"</p></article></section></a>";
    $(posts).hide().appendTo($('#reddit')).fadeIn(fadeAmt);
  }

}


//on failure
function onError(){
  $('#reddit').html("An error has occurred loading this content");
}

