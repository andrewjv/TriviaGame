var wins = 0;
var losses = 0;
var unanswered = 0;
var clock = 5;
var windingDown;

$(document).ready(function(){
    //Game div and stats div are hidden
    $('#game-container').hide();
    $('#stats').hide();

    // game starts here
    $('#start-box').click(function() {
        console.log('game begins')
        $('#start-div').hide();
        $('#stats').hide();
        $('#game-container').show();

        // countdown timer
        windingDown = setInterval(function(){
            clock --;
                $('#timer').html('Timer: ' + clock + ' seconds');
        }, 1000);
    $('#done-button').on('click', function(){
        console.log('done');
        clock = 0;
        console.log(clock); 
        

    })

    if (clock == 0) {
        console.log('reset')
        checkAnswers();
        $('#game-container').hide();
    }
})




// TRIED THIS BUT DIDNT WORK
// function countdown (){
    
//     clock--;
    
//     $('#timer').html('Timer: ' + clock + ' seconds');

//     $('#done-button').on('click', function(){
//         console.log('done');
//         clearInterval(startCountdown);

//     })

//     if (countdown === -1) {
//         checkAnswers();
//         $('#game-container').hide();
//     }
// }

// function startCountdown(){
//     setInterval(countdown,1000);
// }

    // end game and check answers
function checkAnswers(){
    var Q1 = $('input:radio[name=q1]:checked').val();
    var Q2 = $('input:radio[name=q2]:checked').val();
    var Q3 = $('input:radio[name=q3]:checked').val();
    var Q4 = $('input:radio[name=q4]:checked').val();
    var Q5 = $('input:radio[name=q5]:checked').val();
    var Q6 = $('input:radio[name=q6]:checked').val();
    var Q7 = $('input:radio[name=q7]:checked').val();
    var Q8 = $('input:radio[name=q8]:checked').val();
    var Q9 = $('input:radio[name=q9]:checked').val();
    var Q10 = $('input:radio[name=q10]:checked').val();

    if (Q1 == undefined) {
        unanswered++;
    }
    else if (Q1 == "Charlotte Hornets") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q2 == undefined) {
        unanswered++;
    }
    else if (Q2 == "Lowell Merion High School") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q3 == undefined) {
        unanswered++;
    }
    else if (Q3 == "Adidas") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q4 == undefined) {
        unanswered++;
    }
    else if (Q4 == "Nike") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q5 == undefined) {
        unanswered++;
    }
    else if (Q5 == "6") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q6 == undefined) {
        unanswered++;
    }
    else if (Q6 == "Black Mamba") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q7 == undefined) {
        unanswered++;
    }
    else if (Q7 == "Italy") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q8 == undefined) {
        unanswered++;
    }
    else if (Q8 == "24") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q9 == undefined) {
        unanswered++;
    }
    else if (Q9 == "81") {
        wins++;
    }
    else {
        loss++;
    }
    if (Q10 == undefined) {
        unanswered++;
    }
    else if (Q10 == "17") {
        wins++;
    }
    else {
        loss++;
    }

    //update stats
    $('#correct-answers').html(wins);
    $('#wrong-answers').html(losses);
    $("unanswered-span").html(unanswered);

    $('#stats').show();
}
})
 //Game would not end after clock hit 0, could not debug why