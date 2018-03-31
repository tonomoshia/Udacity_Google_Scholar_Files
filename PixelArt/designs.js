
$(document).ready(function () {
    $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var rows = $('#inputHeight').val();
    var columns = $('#inputWeight').val();
    for (var i = 1; i <= rows; i++) { 
        $('table').append("<tr></tr>");
        for (var j = 1; j <= columns; j++) {
            $('tr:last').append("<td></td>");
            $('td').attr("class", 'cells');
        }
      }
      grid.preventDefault();
      $('.cells').click(function (event) { // Color cells on click event
        var color = $('#colorPicker').val();
        $(event.target).css('background-color', color); // Choose  color on a click event
      });
    }); 
  });
  