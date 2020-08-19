$(document).ready(function() {
  $("form#fortune-quiz").submit(function(event){
    event.preventDefault();

    var score = [];
    $("input:checkbox[name=unlucky]:checked").each(function(){
      score.push(parseInt($(this).val()));
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      score.push(parseInt($(this).val()));
    });
      
    var totalScore = score.reduce((a, b) => a + b, 0)
    console.log(totalScore);

      if (totalScore > 2) {
        $(".lucky").show();
      } else if (totalScore < -2) {
        $(".unlucky").show();
      } else {
        $(".neutral").show();
      }

  });
});
