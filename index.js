window.addEventListener('load', function () {
    init();
   });
   
   function init(){
       let toolTimeline = new TimelineMax();
       let duration = .9;
       toolTimeline.from('h1', duration, {
           opacity:0,
           // scale:10,
           ease:Linear.easeIn
       }, .8)
       toolTimeline.staggerFrom('.boxes__box', duration, {
           opacity:0,
           scale:0,
           ease:Back.easeInOut
       }, .1 , .2);
       
       toolTimeline.to('.boxes img', duration, {
           opacity:1,		
           right:0,
           ease:Back.easeOut
       }, .4);
       
       toolTimeline.staggerTo('li', duration, {
           
           top:0,
           ease:Back.easeOut
       }, .1, .9);
       
   };