function addNote(note)
{
    // Check if note is blank, do not proceed


    // alert(note);
    // Create a div
    let div = document.createElement('div');

    // Add class "note"
    div.classList.add('note');

    // Create text element with value = note
    let text = document.createTextNode(note);

    // Append the text/note to the div
    div.appendChild(text);

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    // Next tasks
    // SET a random color of the div
    div.setAttribute('style','background-color: rgb('+randomR+','+randomG+','+randomB+')');

    // Append the div to the body
    document.body.appendChild(div);
}

document.getElementById("add-note").onclick = function()
{
    addNote(document.getElementById("note").value);
    document.getElementById("note").value = "";
}
