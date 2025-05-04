const quiz = [
    {
      question: "Which pope was responsible for the construction of St Peter's Basilica in Rome?",
      options: ["Pope Julius II", "Pope Leo X", "Pope Clement VII", "Pope Paul III"],
      answer: "Pope Julius II"
    },
    {
      question: "What is the theological term for the pope's authority to govern the universal church?",
      options: ["Papal Infallibility", "Papal Supremacy", "Apostolic Succession", "Magisterial Authority"],
      answer: "Papal Supremacy"
    },
    {
      question: "Which theological concept is associated with the pope's role in maintaining the church's unity?",
      options: ["Communion", "Collegiality", "Apostolic Succession", "Magisterial Authority"],
      answer: "Communion"
    },
    {
      question: "What is the name of the Catholic tradition that involves the recitation of prayers for the dead?",
      options: ["Office of the Dead", "Requiem Mass", "Funeral Rites", "Eulogy"],
      answer: "Office of the Dead"
    },
    {
      question: "Which Catholic tradition involves the use of the Stations of the Cross in prayer?",
      options: ["Passion Devotion", "Cross Devotion", "Stations Devotion", "Via Crucis devotion"],
      answer: "Via Crucis devotion"
    },
    {
      question: "What is the name of the Catholic doctrine that explains the relationship between God's sovereignty and human free will?",
      options: ["Jansenism", "Molinism", "Thomism", "Augustinianism"],
      answer: "Molinism"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let selectedOption = null;
  
  const questionE1 = document.getElementById("question");
  const optionsE1 = document.getElementById("options");
  const scoreE1 = document.getElementById("score");
  const totalE1 = document.getElementById("total");
  const scoreContainer = document.getElementById("score-container");
  
  function loadQuestion() {
    const q = quiz[currentQuestion];
    questionE1.textContent = q.question;
    optionsE1.innerHTML = "";
    selectedOption = null;
  
    q.options.forEach(option => {
      const div = document.createElement("div");
      div.textContent = option;
      div.className = "option";
      div.onclick = () => selectOption(div, option);
      optionsE1.appendChild(div);
    });
  }
  
  function selectOption(element, option) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");
    selectedOption = option;
  }
  
  function nextQuestion() {
    if (selectedOption === null) {
      alert("Please select an answer.");
      return;
    }
  
    if (selectedOption === quiz[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionE1.style.display = "none";
    optionsE1.style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    scoreContainer.classList.remove("hidden");
    scoreE1.textContent = score;
    totalE1.textContent = quiz.length;
  }
  
  loadQuestion();