// 1. tomo el valor que se ingreso en el input
// 2. valido si no contiene numeros, mayusculas y caracteres especiales
// 3. mapeo el valor y le ingreso los caracteres a encripar
// 4. lo retorno y lo muestro en el texArea  
        
// const notification = (text, img) => {
//     const imgAlert = document.createElement("img");    //     textAlert.textContent = "";
//     textAlert.classList.add("active");
//     setTimeout(() => {
//         textAlert.classList.remove("active");
//     }, 2600);
//     imgAlert.src = img;
//     imgAlert.classList.add("icon-head");
//     textAlert.textContent = text;
//     textAlert.appendChild(imgAlert);
// };
// inputText.focus();

const encrypt = () =>{
    let text= document.getElementById("input").value; 
    // console.log(text);
    const newText = [];            
    const removeAccents= text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if( !(/[A-Z0-9]/g.test(text)) && removeAccents === text){
        for (let i = 0; i < text.length; i++) {
            if(text[i]=== 'a') newText.push('ai');
            else if(text[i]=== 'e') newText.push('enter');
            else if(text[i]=== 'i') newText.push('imes');
            else if(text[i]=== 'o') newText.push('ober');
            else if(text[i]=== 'u') newText.push('ufat');
            else newText.push(text[i]);
        };
    }else {
        return document.getElementById("input").style.display ="Capital letters, accents and numbers are not allowed"
    };

    document.getElementById("imageR").style.display = "none"; // desaparece imagen 
    document.getElementById("textR").style.display = "none"; // desaparece text 
    document.getElementById("output").innerHTML = newText.join(''); 
    input.value = "";
    input.focus();
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
};
    

const decrypt = () =>{
    let text= document.getElementById("input").value;
    let txtCifrado = text.replace(/enter/igm, "e");
    txtCifrado = txtCifrado.replace(/ober/igm, "o");
    txtCifrado = txtCifrado.replace(/imes/igm, "i");
    txtCifrado = txtCifrado.replace(/ai/igm, "a");
    txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    console.log(txtCifrado);

    document.getElementById("imageR").style.display = "none"; // desaparece imagen 
    document.getElementById("textR").style.display = "none"; // desaparece text 
    document.getElementById("output").innerHTML = "hi"; 
    input.value = "";
    input.focus();
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
};

const copiar = () =>{
    let contenido = document.querySelector("#output");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("imageR").style.display = "";
    console.log(document.getElementById("imageR"));
    document.getElementById("textR").style.display = "";
    document.getElementById("output").innerHTML = ""; 
    document.getElementById("copy").style.display = "none";
    alert('Se copio');
}