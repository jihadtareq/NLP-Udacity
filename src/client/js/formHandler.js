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
        //to get elements from entities object
        let entities = data.entities;
      
        document.getElementById('text').innerHTML = data.text;
        document.getElementById('language').innerHTML = data.language;
        document.getElementById('keyword').innerHTML = entities.keyword;
        document.getElementById('location').innerHTML =entities.location;
        document.getElementById('organization').innerHTML =entities.organization;
        document.getElementById('person').innerHTML =entities.person;

    });
}

export { handleSubmit }
