$('#search').keyup(function () {
    let searchField = $('#search').val();
    let myExp = new RegExp(searchField, 'i');
    $.getJSON('data.json', function(data) {
        let output = '<ul class="searchresults">';
        $.each(data, function(key, val) {
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name +'" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }
        });
        output +='</ul>';
        $('#update').html(output);
    });
});
