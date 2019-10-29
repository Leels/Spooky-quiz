$(document).ready(function() {
  $("form#fortune-quiz").submit(function(event){
    event.preventDefault();

    // var score = [];

    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unlucky = parseInt($(this).val());
      // score.push(unlucky);
      $("input:checkbox[name=lucky]:checked").each(function(){
        var lucky = parseInt($(this).val());
        // score.push(lucky);

        var totalScore = (unlucky + lucky)

        if (totalScore > 2) {
          $(".lucky").show();
        } else if (totalScore < -2) {
          $(".unlucky").show();
        } else {
          $(".neutral").show();
        }
        console.log(totalScore);

      });

    });






  });
});
