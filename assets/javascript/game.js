// variables
    // random number aka goal
    var goal = Math.floor((Math.random() * 102) + 19);
    $("#goal").text(goal);
    // wins
    var wins = 0
    // losses
    var losses = 0
    // score
    var score = 0
    // bug values
    var allbugs = ["#bug1", "#bug2", "#bug3", "#bug4"];
    for (i = 0; i < allbugs.length; i++ ) {
        $(allbugs[i]).val(Math.floor((Math.random() * 12) + 1));
    };

// functions
    // at the beginning of each round
        function reset() {
            // generate random number aka goal
            goal = Math.floor((Math.random() * 102) + 19);
            $("#goal").text(goal);
            // generate random bug values
            for (i = 0; i < allbugs.length; i++ ) {
                $(allbugs[i]).val(Math.floor((Math.random() * 12) + 1));
            };
            // reset score
            score = 0
            $("#score").text(score);
        };
    // at the end of each round
        // update wins/losses
        function winLose() {
            score === goal ? wins++ : losses++
            $("#wins").text(wins);
            $("#losses").text(losses);
            reset();
        };
    // to play
        $(".bug-image").on("click", function() {
            // add bug value to score
            score = score + parseInt($(this).val());
            $("#score").text(score);
            // check if score is < / == / > goal
            score < goal ? null : winLose();
        });
