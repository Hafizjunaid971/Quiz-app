
let questions = [
    {
      id: 1,
      question: "Which Sorae In Quran Does Not Start In Bismillah",
      answer: "Sorae Toba",
      options: [
        "Sorae Namal",
        "Sorae Toba",
        "Sorae Yonus",
        "Sorae Furqan"
      ]
    },
    {
      id: 2,
      question: "Which Sorae In Quran Between Write Bismillah ",
      answer: "Sorae Namal",
      options: [
        "Sorae Namal",
        "Sorae Yousuf",
        "Sorae hashar",
        "Sorae Anbiya"
      ]
    },
    {
      id: 3,
      question: "Whics Sorae In Quran Every Ayat Write Allah",
      answer: "Sorae Mujadila",
      options: [
        "Sorae Nabah",
        "Sorae Qalam",
        "Sorae Mujadila",
        "Sorae Ikhlas"
      ]
    },
    {
      id: 4,
      question: "Whics Sorae In Quran Title In Ummul Quran",
      answer: "Sorae Fatiha",
      options: [
        "Sorae Rehman",
        "Sorae Fatiha",
        "Sorae Yaseen",
        "Sorae Ikhlas"
      ]
    },
    {
      id: 5,
      question: "Whics Ruku In Quran Complete In One Ayat select Sorat Name",
      answer: "Sorae Muzamil",
      options: [
        "Sorae Muzamil",
        "Sorae Qalam",
        "Sorae Mujadila",
        "Sorae Ikhlas"
      ]
    },
    {
      id: 6,
      question: "Who is the current President Of pakistan",
      answer: "Arif Alvi",
      options: [
        "Qamar jave bajwa",
        "Imran Khan",
        "Arif Alvi",
        "Fawad Chaudry"
      ]
    },
    {
      id: 7,
      question: "Who is the Current C M in Sindh",
      answer: "Syed Murad Ali Shah",
      options: [
        "Ishratul Ibad",
        "Syed Murad Ali Shah",
        "Fawad Chaudry",
        "Amir Liaqat"
      ]
    },
    {
      id: 8,
      question: "Selcet highest Building in pakistan",
      answer: "Bahria Town ICON",
      options: [
        "Grand Hyatt Hotel	",
        "Bahria Town ICON",
        "Habib Bank Building",
        "The Centaurus Hotel"
      ]
    },
    {
      id: 9,
      question: "How many Ayat In Sorae Rehman",
      answer: "78",
      options: [
        "76",
        "77",
        "78",
        "79"
      ]
    },
    {
      id: 10,
      question: "who is the Manager of Saylani Mass I T",
      answer: "Ali Mughal",
      options: [
        "Ali Mughal",
        "Dr zia",
        "FAHEEM UZ ZAMAN",
        "MUHAMMAD IMRAN"
      ]
    },
    {
      id: 11,
      question: "who is the First Female *P M* in Pakistan",
      answer: "Be Nazir Bhutto",
      options: [
        " Begum Rana Liaqat Ali Khan",
        "Fatima Jinah",
        "Be Nazir Bhutto",
        "Marym Nawaz"
      ]
    },
    {
      id: 12,
      question: "Select Pegumber Hazrat Yousuf (AS) Mother Name",
      answer: "B B Rakhail",
      options: [
        "B B Sunaina",
        "B B Maria",
        "B B Umaina",
        "B B Rakhail"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;//yahan answer chek hora ha k sahe ha ya galt point increase k lye
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      
      sessionStorage.setItem("points", points);
    
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
  //  let question=document.getElementById("question");
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  