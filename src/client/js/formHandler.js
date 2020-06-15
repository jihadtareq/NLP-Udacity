function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textForm').value
    //checkForName(formText)

    //console.log("::: Form Submitted :::")
    if(!formText) return;
    console.log(formText)
    fetch('/article',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({text : formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)

        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence
        document.getElementById('excerpt').innerHTML = res.text
    })
}

export { handleSubmit }
