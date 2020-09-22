const convertBtn = document.querySelector(".convert-button");
const URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener('click', ()=>{
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL){
    window.location.href = `http://localhost:8080/download?URL=${URL}`
}