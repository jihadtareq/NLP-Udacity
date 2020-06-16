function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formtext = document.getElementById('test-text').value
    //checkForName(formText)

    console.log("::: Form Submitted :::")
    if(!formtext) return;
    console.log(formtext);
    fetch('/api' , {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({ text:formtext })
    })
    .then(res => res.json())
    .then(data => {

        document.getElementById('Location').innerHTML = data.Location;
        document.getElementById('keyword').innerHTML = data.keyword;
        document.getElementById('organization').innerHTML = data.organization;
        document.getElementById('person').innerHTML = data.person;

    });
}

export { handleSubmit }
