const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.navi a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navi.classList.remove('active');
    overlay.classList.remove('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navi.classList.remove('active');
        overlay.classList.remove('active');

    });

});


const questions = document.querySelectorAll('.question-box');

questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        // 全部閉じる
        document.querySelectorAll('.question-box').forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
            }
        });
        document.querySelectorAll('.answer-box').forEach(a => {
            if (a !== answer) {
                a.style.height = null;
            }
        });

        
        //toggle処理
        if (answer.style.height) {
            //閉じる
            answer.style.height = null;
            question.classList.remove('active');
        } else {
            //開く
            answer.style.height = answer.scrollHeight + 'px';
            question.classList.add('active');
        };



    });
});

