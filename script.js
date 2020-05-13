const today = $('#today');

    updatePage();

    setInterval(function () {
    updatePage();
  }, 1000);

// Get stored textarea values from localStorage
$('#9a').children('textarea').val(localStorage.getItem('9a'));
$('#10a').children('textarea').val(localStorage.getItem('10a'));
$('#11a').children('textarea').val(localStorage.getItem('11a'));
$('#12p').children('textarea').val(localStorage.getItem('12p'));
$('#1p').children('textarea').val(localStorage.getItem('1p'));
$('#2p').children('textarea').val(localStorage.getItem('2p'));
$('#3p').children('textarea').val(localStorage.getItem('3p'));
$('#4p').children('textarea').val(localStorage.getItem('4p'));
$('#5p').children('textarea').val(localStorage.getItem('5p'));
// Add event listener to buttons that references their parent div
$('button').on('click', function () {
  let time = $(this).parent().attr('id');
  let text = $(this).siblings('textarea').val();
  // Store key: values for time and text
  localStorage.setItem(time, text);
});


      function updatePage() {
  today.text('Today is ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '.');

  switch (moment().format('h')) {
    case '9':
      $('#9a').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#9a').children('textarea').css('background-color', 'darkRed');
      $('#9a').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '10':
      $('#10a').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#10a').children('textarea').css('background-color', 'darkRed');
      $('#10a').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '11':
      $('#11a').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#11a').children('textarea').css('background-color', 'darkRed');
      $('#11a').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '12':
      $('#12p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#12p').children('textarea').css('background-color', 'darkRed');
      $('#12p').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '1':
      $('#1p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#1p').children('textarea').css('background-color', 'darkRed');
      $('#1p').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '2':
      $('#2p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#2p').children('textarea').css('background-color', 'darkRed');
      $('#2p').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '3':
      $('#3p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#3p').children('textarea').css('background-color', 'darkRed');
      $('#3p').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '4':
      $('#4p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#4p').children('textarea').css('background-color', 'darkRed');
      $('#4p').nextAll().children('textarea').css('background-color', 'black');
      break;
    case '5':
      $('#5p').prevAll().children('textarea').css('background-color', 'darkBlue');
      $('#5p').children('textarea').css('background-color', 'darkRed');
      $('#5p').nextAll().children('textarea').css('background-color', 'black');
      break;
    default:
      $('textarea').css('background-color', 'black');
  }
}
