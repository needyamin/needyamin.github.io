$.ajax("https://www.googleapis.com/blogger/v3/blogs/4136930891022846797/posts?callback=handleResponse&key=AIzaSyC-_Wi5d_YEd6cyT1gHhUVNq7e3jOYjt9U")
function handleResponse(response) {
  //var post_number = Object.keys(response.items).length; //number of posts
  for (i = 0; i < response.items.length; i++) {
    var titleHtml = '<tr> <td style="padding:10px;text-align:center;"> ' + (i + 1) + '. </td>  <td style="padding:10px;text-align:center;"><a href="https://github.com/needyamin"><span class="fa fa-github"></span></a></td> <td style="padding:10px;"><a href="' + response.items[i].url + '" class="post" target="_blank"> ' + response.items[i].title + '</a></td> <td style="padding:10px;" width="20%"><a href="' + response.items[i].url + '" class="post" target="_blank"> ' + response.items[i].labels + '</a></td></tr>';
    $('#content').append(titleHtml);
    
  }

  
}
