const input = document.querySelector("#input-bx");
const output = document.querySelector("#meaning");
const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
    const val = input.value;
    if (val == ""){
        alert("Please enter a Eng Word kindly!");
    } else{
        try{
            const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
            let meaning = await fetch(URL);
            meaning = await meaning.json();
            console.log( meaning[0]['meanings'][0]['definitions'][0]['definition']);
            output.innerHTML = `Meaning:s${meaning[0]['meanings'][0]['definitions'][0]['definition']}` 
        } catch(error){
            alert("Please enter a valid word!");
        }
    }

})