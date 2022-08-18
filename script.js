const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById("quoteInput")
const timerElement = document.getElementById("timer")
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
        length = arrayQuote.length
        words = length / 5
        time = getTimerTime()
        minutes = time / 60
        wpm = Math.round(words / minutes)

        prompt(" WPM: "+ wpm + " Press enter to continue.")
        renderNewQuote()
    }
})

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
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ""
    quote.split("").forEach(character => {
        const characterSpan = document.createElement("span")
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer()
}

let startTime
function startTimer() {
    timerElement.innterText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}


renderNewQuote()