$(document).ready(function() {
  var showbtn = $('.btn');

  showbtn.on('click', function() {
    console.log('works');
    var mojObiekt = {
      full_name: "Grzegorz Eryk Smyrgała",
      email: "grzegorzeryks@gmail.com",
      phone: "695279382",
      cover_letter: "",
      urls: ["https://github.com/grzegorzeryks", "https://grzegorzeryks.github.io/sarmackistyl/"]
    };
    var json = JSON.stringify(mojObiekt);
    console.log(json);
    $.ajax({
      url: 'https://qunabu.com/api/hackujzqunabu',
      dataType: 'json',
      method: 'POST',
      contentType: 'application/json',
      data: json
    }).done(function(response) {
      console.log(response);
    }).fail(function(error) {
      console.log(error);
    });
  });
});
