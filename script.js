(function ($) {

    var quests = $('.quests').find('div');
    quests.addClass('hide');
    quests.eq(0).removeClass('hide');

    var selected = $('.quests').find('.selected');
   
    var li = $('.quests').find('li');

    var score = $('#score');
    var totalScore = 0;




    li.on('click', function () {
        schovaj();
        clearInterval(timer_id);
        timer();
        time_limit = 5;


        if (time_out == true) {
            ukaz()
        } else {
            console.log("totalscore", totalScore);
            totalScore += $(this).data('value') * 1;

            console.log("totalscore", totalScore);
            score.text('Score:' + ' ' + totalScore);
        }

        if ($('#ten') == selected){
            $('#timer').hide();
        }
        console.log('selectnuta classa : ',selected);




    })

    function schovaj() {
        selected.addClass('hide');
        var nextSelected = selected.next();
        selected = nextSelected;
        selected.addClass('selected').siblings().removeClass('selected');
        selected.removeClass('hide');

    }
    
   var koniec = $('#ten').find('li');
   koniec.$('#timer').hide();
    
















    // =================== Asi iba po tialto to funguje xD ====================


    // ============== toto malo tiež vytiahnuť data atribut ale nejako nefungoval forEach =============

    // const events = document.querySelector('.quests');
    // events.forEach(e => {
    //     console.log(e);

    // })

    // ============================  Skusanie si math operácie a ako to vlastne funguje, / snaha o prirátanie data atributu k vytvorenému atributu v premennej ==============





    // =====================================Vytvorenie SCORE DIVU ktorý sa zobrazí na konci , chcem ho potom naštýlovať na poslednej stránke  ktorá sa zobrazí a nejak naň naviazať ten
    // =======================================      neexistujúci prepočet čo možno niekedy vznikne       ===================================================================




    // var intiger = 10;
    // intiger.appendTo('footer');




    //========= keď mi ešte nefungoval slider na otázky, tak som sa snažil nejako získať cez html idčko každej otázky a slidovať to cez to idčko , / = nedokázal som získať idčko =====


    // var id = container.find('id');

    // console.log(id);

    // container.find('li').on('click', function(){
    //     container.addClass('hide');
    //     var nextId = id.next();

    // })



})(jQuery);