var searchterm;
var articleCount;
var startYear;
var endYear;

$(".submit").on("click", function ()
{
    $(".submit").preventDefault();
    AssignValues();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b3debd0a8764ff9b15fe098b32a079b",
        'q': searchterm,
        'begin_date': startYear,
        'end_date': endYear
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result)
    {
        console.log(result);
    }).fail(function (err)
    {
        throw err;
    });

});

function AssignValues()
{
    searchterm = $("#search-term").text();
    articleCount = $("#records").text();
    startYear = $("#start-year").text();
    endYear = $("#end-year").text();
    console.log(searchterm);
    console.log(articleCount);
    console.log(startYear);
    console.log(endYear);


}





