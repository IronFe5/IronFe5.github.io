const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById("quoteInput")
const timerElement = document.getElementById("timer")
const wpmElement = document.getElementById("wpmDisplay")

var wpm = 0

quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span")
    const arrayValue = quoteInputElement.value.split("")

    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove("correct")
            characterSpan.classList.remove("incorrect")
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add("correct")
            characterSpan.classList.remove("incorrect")
        } else {
            characterSpan.classList.remove("correct")
            characterSpan.classList.add("incorrect")
            correct = false
        }
    })

   if (correct) {
        quoteDisplayElement.style.display = "none"
        quoteInputElement.style.display = "none"
        timerElement.style.display = "none"
        wpmElement.style.display = "block"
        length = arrayQuote.length
        words = length / 5
        time = getTimerTime()
        minutes = time / 60
        wpm = Math.round(words / minutes)
        quoteInputElement.blur()
//        prompt(" WPM: "+ wpm + " Press enter to continue.")
        document.getElementById("wpmDisplay").innerHTML = ("WPM: " + wpm)
        timerElement.disabled = true
//        renderNewQuote())
    }
})


//quoteInputElement.addEventListener("keypress", (event) => {
//    startTimer()
//},
//{ once: true });

//window.addEventListener("keypress", (event) => {
//    if(event.key === "Enter"){
//        renderNewQuote()
//        quoteInputElement.blur();
//    }
//})

function generateWords(){
    var list = []
    const words = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find"]
    for (let i = 0; i < 10; i++) {
        list.push(words[Math.floor(Math.random() * 100)])
    }
    return(list.join(" "))

  }

console.log(generateWords())



function getRandomQuote() {
    const quotes = ["What lies behind us and what lies before us are small matters compared to what lies within us.",
    "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
    "Lose an hour in the morning, and you will spend all day looking for it.",
    "There is no retirement for an artist, it's your way of living so there is no end to it.",
    "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    "Wisdom cannot come by railroad or automobile or airplane or be hurried up by telegraph or telephone.",
    "Trust your own instinct. Your mistakes might as well be your own, instead of someone else's.",
    "Silence is the sleep that nourishes wisdom.",
    "I gave my life to become the person I am right now. Was it worth it?"]
    choice = Math.floor(Math.random() * 8)
    return quotes[choice]
}

async function renderNewQuote() {
    const quote = await generateWords()
    quoteDisplayElement.innerHTML = ""
    quote.split("").forEach(character => {
        const characterSpan = document.createElement("span")
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer()
    quoteInputElement.focus()
    document.getElementById("wpmDisplay").innerHTML = ("")
    quoteDisplayElement.style.display = "block"
    quoteInputElement.style.display = "block"
    timerElement.style.display = "none"
    quoteInputElement.focus()
}

let startTime
function startTimer() {
    quoteInputElement.addEventListener("keypress", (event) => {
    timer.innterText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
//    timerElement.style.display = "block"
    },
    { once: true })
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)


}

quoteInputElement.style.display = "none"
timerElement.style.display = "none"
wpmElement.style.display = "none"
// renderNewQuote()