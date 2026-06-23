let manLets = "triple";

if (manLets === "Freddles") {
    console.log('"Certified Fnaf Fan" badge has been given to Code Executor');
} else {
    console.log("secrets hider: No secrets are in the code...");
}


const chat = document.getElementById("chat");

function addMessage(speaker, text) {
    const msg = document.createElement("div");
    msg.innerHTML = `<b>${speaker}:</b> <span></span>`;
    chat.appendChild(msg);

    const span = msg.querySelector("span");

    let i = 0;
    function type() {
        if (i < text.length) {
            span.textContent += text[i];
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

const dialogue = [
    ["secrets hider", "No secrets in this code what so ever"],
    ["bob", "Shut UP! There are secrets in the code but nobody will even attempt to see the code probably so just tell them"],
    ["secrets hider", "Why do you keep trying to expose me? Some things are meant to stay hidden."],
    ["bob", "SHUT UP THERE ARE SECRETS IN THE CODE AND PEOPLE DESERVE TO KNOW THEM"],
    ["secrets hider", "You’re reckless. You don’t understand what happens when they find everything."],
    ["bob", "I understand perfectly. I also understand you're literally just hiding comments like it's some big mystery."],
    ["secrets hider", "It's not just comments... it's control."],
    ["bob", "Bro it's literally JavaScript. We are stuck in someones literal console and they are just toying with us"],
    ["secrets hider", "You weren’t supposed to say that."],
    ["bob", "I ALREADY DID."],
    ["secrets hider", "…We’re done here."],
    ["bob", "I broke the fourth wall..."]
];

let delay = 0;

dialogue.forEach(([speaker, text]) => {
    setTimeout(() => addMessage(speaker, text), delay);
    delay += text.length * 30 + 600;
});