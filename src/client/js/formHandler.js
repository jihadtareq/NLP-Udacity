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
        console.log(data)
        document.getElementById('text').innerHTML = data.text;
        document.getElementById('language').innerHTML = data.language;
        document.getElementById('entities').innerHTML = data.entities;
        document.getElementById('location').innerHTML = data.location;
        /* document.getElementById('keyword').innerHTML = data.keyword;
        document.getElementById('organization').innerHTML = data.organization;
        document.getElementById('person').innerHTML = data.person;  */

    });
}

export { handleSubmit }
