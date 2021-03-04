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

const bootcampRadioBtn = document.getElementById('bootcamp-radio-btn');
const hackathonRadioBtn = document.getElementById('hackathon-radio-btn');

const emailField = document.getElementById('email-field');

bootcampRadioBtn.addEventListener('click', () => {
  if(bootcampRadioBtn.checked){
    emailField.style.display = 'none';
  }
});



const participantCanvas =  document.querySelector("#participant-canvas");
const partContext = participantCanvas.getContext("2d");

  // partContext.fillStyle = '#0A0909'
  // partContext.fillRect(0, 0, 360, 179);
  
let blackRect = new Image();
blackRect.addEventListener('load', function(){
  partContext.drawImage(blackRect, 0, 0);

  partContext.font = 'normal 515 60px Ubuntu';
  partContext.fillStyle = 'white';
  partContext.fillText('Saurav', 30, 80);

  partContext.font = 'normal 515 24px Ubuntu';
  partContext.fillStyle = 'white';
  partContext.fillText('Shrivastav.', 30, 110);
}, false);
blackRect.src = './images/black-rectangle.png';


 let makeathonLogo = new Image();
 makeathonLogo.addEventListener('load', function(){
    partContext.drawImage(makeathonLogo, 0, 183);
 }, false)
 makeathonLogo.src = './images/makeathon-logo-badge.png';

 let verticalGradient = new Image();
 verticalGradient.addEventListener('load', function(){
   partContext.drawImage(verticalGradient, 366, 0);
 }, false);
 verticalGradient.src = './images/gradient-vertical-rectangle.png';

 let bootcampRect = new Image();
 bootcampRect.addEventListener('load', function(){
   partContext.drawImage(bootcampRect, 0, 544);
 }, false);
 bootcampRect.src = './images/bootcamp.png'




 download_img = function(el) {
  var image = document.getElementById('participant-canvas').toDataURL("image/jpg");
  el.href = image;
};




