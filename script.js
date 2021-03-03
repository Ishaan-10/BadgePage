$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });

  const participantCanvas =  document.querySelector("#participant-canvas");
  const partContext = participantCanvas.getContext("2d");

  partContext.fillStyle = '#0A0909'
  partContext.fillRect(0, 0, 360, 179);

 let makeathonLogo = new Image();
 makeathonLogo.addEventListener('load', function(){
    partContext.drawImage(makeathonLogo, 0, 179);
 }, false)
 makeathonLogo.src = './images/makeathon-logo-badge.png';

 let verticalGradient = new Image();
 verticalGradient.addEventListener('load', function(){
   partContext.drawImage(verticalGradient, 362, 0);
 }, false);
 verticalGradient.src = './images/gradient-vertical-rectangle.png';


 download_img = function(el) {
  var image = document.getElementById('participant-canvas').toDataURL("image/jpg");
  el.href = image;
};




