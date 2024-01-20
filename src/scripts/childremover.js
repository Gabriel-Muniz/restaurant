const content = document.getElementById("content");

function removerChild() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

export default removerChild; 