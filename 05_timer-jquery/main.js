$(document).ready(function() {
  let timer 
  let cnt = 0
  $('button').click(function() {
    if (timer) {
      clearInterval(timer)
      timer = null;

      $('button').text('Start')
      $('#running').slideUp();
    } else {
      timer = setInterval(function() {
        cnt += 1
        $('#seconds').text(Math.floor(cnt/10))

        $('.dot div:last-child').prependTo($('.dots'))
      }, 100)

      $('button').text('Stop')
      $('#running').slideDown();
    }
  })
})
