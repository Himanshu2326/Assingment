
//? Welcome To JavaScript :---


/*
================================
? => Techers About Section Js
================================
*/


//? Show More and Show Less Buttons :---
let Show_More_Btn = document.querySelectorAll('.Show_More_Btn');
let Show_Less_Btn = document.querySelectorAll('.Show_Less_Btn');

//* Hide all :--
Show_More_Btn.forEach(btn => {
    btn.style.display = "none";
});
Show_Less_Btn.forEach(btn => {
    btn.style.display = "none";
});


//? Paragraphs :---
let TeacherCard_About = document.querySelectorAll('.TeacherCard_About');

TeacherCard_About.forEach((para, i) => {
    let fullText = para.innerHTML;
    if (fullText.length > 550) {
        let halfText = fullText.substring(0, 550);
        para.innerHTML = halfText;

        //* Display the corresponding "Show More" button
        Show_More_Btn[i].style.display = "block";

        //* Show More button
        Show_More_Btn[i].addEventListener('click', () => {
            para.innerHTML = fullText;
            Show_More_Btn[i].style.display = "none";
            Show_Less_Btn[i].style.display = "block";
        });

        //* Show Less button
        Show_Less_Btn[i].addEventListener('click', () => {
            para.innerHTML = halfText;
            Show_Less_Btn[i].style.display = "none";
            Show_More_Btn[i].style.display = "block";
        });
    }
});





/*
================================
? => Students Review Section Js
================================
*/



let Student_Read_More_Btn = document.querySelectorAll('.Student_Read_More_Btn');

Student_Read_More_Btn.forEach((btns) => {
    btns.style.display = "none"
});


//? Students Review :--

let Studnet_Review = document.querySelectorAll('.Studnet_Review');

Studnet_Review.forEach((Review, i) => {
    let fullReview = Review.innerHTML;

    if (fullReview.length > 300) {
        let halfReview = fullReview.substring(0, 300);
        Review.innerHTML = halfReview;

        Student_Read_More_Btn[i].style.display = "block";

        //? On Click :--
        Student_Read_More_Btn[i].addEventListener('click', () => {
            Review.innerHTML = fullReview;
            Student_Read_More_Btn[i].style.display = "none";

        })
    }


})




/*
================================
? => FAQs Section Js
================================
*/


let FAQ = document.querySelectorAll('.FAQ');
FAQ.forEach((Faq) => {
    Faq.style.display = 'none';
})


//* Only 4 Showing at Initial :-- 

let FAQArray = Array.from(FAQ);
if (FAQArray.length > 4) {
    Show_FAQ = FAQArray.splice(0, 4);
    Show_FAQ.forEach((Faq) => {
        Faq.style.display = 'flex';
    })
}


//? Load More FAQ Btn :-- 
let FAQ_Btn = document.querySelector('.FAQ_Btn');

FAQ_Btn.addEventListener('click', () => {
    FAQ.forEach((Faq) => {
        Faq.style.display = 'flex';
    })
    FAQ_Btn.style.display = "none"
})


/*
------------------------
? => Toggle FAQ Js:-
------------------------
*/

let FAQ_Div = document.querySelectorAll('.FAQ_Div');
let Toggle_FAQ_Btn = document.querySelectorAll('.Toggle_FAQ_Btn');
let head = document.querySelectorAll('.head');

//* Hide all FAQ sections initially
FAQ_Div.forEach((val) => {
    val.style.display = "none";
});

//? Add click event listener head
head.forEach((Btn, i) => {
    Btn.addEventListener('click', () => toggleFAQ(i));
});


//* Function to toggle FAQ
function toggleFAQ(i) {
    let faqDiv = FAQ_Div[i];
    let toggleBtn = Toggle_FAQ_Btn[i];

    if (faqDiv.style.display === "none") {
        faqDiv.style.display = "block";
        toggleBtn.style.transform = "rotate(-180deg)";
    } else {
        faqDiv.style.display = "none";
        toggleBtn.style.transform = "rotate(0deg)";
    }
}



/*
================================
? => StudentCard Section Js
================================
*/

let StudentCard = document.querySelectorAll('.StudentCard');
let SCard_Btns = document.querySelectorAll('.SCard_Btns');

//? Initail State :-- 
StudentCard.forEach((card) => {
    card.style.display = "none";
})

SCard_Btns[0].classList.add('active');

let add = 0;
for (let i = 0 + add; i <= 4 + add; i++) {
    StudentCard[i].style.display = "flex";
}


//? On Click State :-- 
SCard_Btns.forEach((btns) => {

    btns.addEventListener('click', () => {
        SCard_Btns.forEach((btn) => btn.classList.remove('active'));
        btns.classList.add('active');
        add = Number(btns.id);

        StudentCard.forEach((card) => {
            card.style.display = "none";
        })
        for (let i = 0 + add; i <= 4 + add; i++) {
            StudentCard[i].style.display = "flex";
        }
    });

})



/*
================================
? => Curriculum Section Js
================================
*/


let Curriculum_Btns = document.querySelectorAll(".Curriculum_Btns");
let Curriculum = document.querySelectorAll('.Curriculum');

//? Initial State:- 
Curriculum_Btns[0].classList.add("active");
Curriculum.forEach((val) => {
    val.style.display = "none"
})

//? Only Active Showing 
let Active_Curriculum = document.querySelectorAll(`.Curriculum_Btns--1`);
Active_Curriculum.forEach((val) => {
    val.style.display = "block"
})

Curriculum_Btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let targetBtn = e.target;
        Curriculum_Btns.forEach((btn) => {
            btn.classList.remove('active')
        });

        targetBtn.classList.add('active');
        let Num = e.target.dataset.btnNum;


        //? Hide All:--  
        Curriculum.forEach((val) => {
            val.style.display = "none"
        })

        //? Only Active Showing 
        let Active_Curriculum = document.querySelectorAll(`.Curriculum_Btns--${Num}`);
        Active_Curriculum.forEach((val) => {
            val.style.display = "block"
        })

    })

})




/*
================================
? => Fixed Section Section Js
================================
*/


let Main_Fixed_Section = document.querySelector('.Main-Fixed-Section')
let Footer = document.querySelector('.Footer')

let FixedSection = (entries) => {
    let entry = entries[0];
    entry.isIntersecting === false ?
        Main_Fixed_Section.style.display = "block" :
        Main_Fixed_Section.style.display = "none";
}

const FooterObserver = new IntersectionObserver(FixedSection, {
    root: null,
    rootMargin: '-100px',
    threshold: 0,
})

FooterObserver.observe(Footer);
