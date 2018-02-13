    var totalWinNum = 0

    var totalLossNum = 0

    var sco = 0

    var ran = Math.floor(Math.random() * 120) + 19;

    $("#randomNumber").html(ran);

    var bCrys = Math.floor(Math.random() * 12) + 1;

    var fSton = Math.floor(Math.random() * 12) + 1;

    var gSlip = Math.floor(Math.random() * 12) + 1;

    var sSquar = Math.floor(Math.random() * 12) + 1;

    var kTon = Math.floor(Math.random() * 12) + 1;

    var amet = Math.floor(Math.random() * 12) + 1;


    $("#ballCrystal").click(function() {
        sco = sco + bCrys
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal").css({"position": "absolute", "top": "103%", "left": "5.7%","transform": "translate(-25%, -50%)"}).html(bCrys)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    $("#fantasyStone").click(function() {
        sco = sco + fSton
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal2").css({"position": "absolute", "top": "103%", "left": "17.2%","transform": "translate(-25%, -50%)"}).html(fSton)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    $("#glassSlipper").click(function() {
        sco = sco + gSlip
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal3").css({"position": "absolute", "top": "103%", "left": "28.7%","transform": "translate(-25%, -50%)"}).html(gSlip)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    $("#squareSapphire").click(function() {
        sco = sco + sSquar
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal4").css({"position": "absolute", "top": "126%", "left": "5.7%","transform": "translate(-25%, -50%)"}).html(sSquar)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    $("#kryptonite").click(function() {
        sco = sco + kTon
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal5").css({"position": "absolute", "top": "126%", "left": "17.2%","transform": "translate(-25%, -50%)"}).html(kTon)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    $("#amethyst").click(function() {
        sco = sco + amet
        $(".currentScoreNum").html("<h2>" + sco + "</h2>");
        $("#numReveal6").css({"position": "absolute", "top": "126%", "left": "28.7%","transform": "translate(-25%, -50%)"}).html(amet)
        if (sco === ran) {
            $("#winCount").html("Wins: " + (totalWinNum = totalWinNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You won!!");
        }
        if (sco > ran) {
            $("#lossCount").html("Losses: " + (totalLossNum = totalLossNum + 1));
            ran = Math.floor(Math.random() * 120) + 19;
            sco = 0
            bCrys = Math.floor(Math.random() * 12) + 1;
            fSton = Math.floor(Math.random() * 12) + 1;
            gSlip = Math.floor(Math.random() * 12) + 1;
            sSquar = Math.floor(Math.random() * 12) + 1;
            kTon = Math.floor(Math.random() * 12) + 1;
            amet = Math.floor(Math.random() * 12) + 1;
            $(".currentScoreNum").html("<h2>" + 0 + "</h2>");
            $("#randomNumber").html(Math.floor(Math.random() * 120) + 19);
            $("#numReveal").css({}).html("");
            $("#numReveal2").css({}).html("");
            $("#numReveal3").css({}).html("");
            $("#numReveal4").css({}).html("");
            $("#numReveal5").css({}).html("");
            $("#numReveal6").css({}).html("");
            $("#status").html("You lost!!");
        }
    });

    var numberString = $('.currentScoreNum').text();

    var scoreInt = Number(numberString);

    $( ".scoreInfoBox" ).height($( ".randomNumberBox" ).height())