$(document).ready((function() {
    let countFirst = $(".js-kwiz__count .oneQuest"),
        countAll = $(".js-kwiz__count .allQuest"),
        questionIn = $(".js-kwiz__quest"),
        answerIn = $(".js-kwiz__answer"),
        requestAnswer = $(".js-kwiz-request-answers"),
        resQuestion = $('.res__question'),
        resAnswer = $('.res__answer'),
        questions = [{
            quest: "На какой срок нужен кредит?",
            answer: ["до 6 месяцев", "от 6 месяцев до 2 лет", "от 2 до 5 лет", "свыше 5 лет"]
        }, {
            quest: "Сколько бабок хочешь?",
            answer: ["Много", "Очень много", "Бесконечно много", "200 BYN"]
        }, {
            quest: "Кем работаешь?",
            answer: ["Доктором", "Таксистом", "Инженером"]
        }],
        count = 0,
        array = [];

    function u(countFirst) {
        answerIn.html(""), countFirst.forEach((countFirst, countAll) => {
            answerIn.html(
                answerIn.html() + `<input class="kwiz__radio" value="${countFirst}" name="answer" id="${countAll}" type="radio">\n
                <label class="kwiz__label"for="${countAll}">${countFirst}</label>`
                );
        }), 
        $(".kwiz__radio:first").prop("checked", !0);
     }

    countFirst.text(count + 1),
    questionIn.html(questions[count].quest),
    countAll.text(questions.length),
    u(questions[count].answer), 
    $(".kwiz__btn").click((function() {
        requestAnswer.val(requestAnswer.val() + `${questions[count].quest} : ${$('.kwiz input[name="answer"]:checked').val()} ;`),
        count++,
        array.push($('.kwiz input[name="answer"]:checked').val());
        console.log(array.length);
        count >= questions.length ? ($(".kwiz__wrapper").fadeOut(200),
        setTimeout(() => {$(".kwiz__form").fadeIn(100)}, 200)) : 
        (countFirst.text(count + 1), questionIn.html(questions[count].quest), u(questions[count].answer));
        if (count >= questions.length) {
            $.each(array, function(index) {
                $('.res__question-1').html(`${questions[0].quest}`);
                $('.res__answer-1').html(array[0]);
                $('.res__question-2').html(`${questions[1].quest}`);
                $('.res__answer-2').html(array[1]);
                $('.res__question-3').html(`${questions[2].quest}`);
                $('.res__answer-3').html(array[2]);
            })
        }
    })),

    $(".quest__btn").click((function() {
        $(".kwiz").addClass("kwiz-active"),
        $(document.body).addClass("scroll");
    }));
}));