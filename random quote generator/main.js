const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter');

// randomQuote function
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'loading Quote...';
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');
    })
}

soundBtn.addEventListener('click', ()=>{
    let utterrance = new SpeechSynthesisUtterance(`${quoteText.innerText} Author ${authorName.innerText}`);
    speechSynthesis.speak(utterrance);
});
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener('click', ()=>{
    let faceUrl = `https://www.twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(faceUrl, '_blank');
});
quoteBtn.addEventListener('click', randomQuote);

