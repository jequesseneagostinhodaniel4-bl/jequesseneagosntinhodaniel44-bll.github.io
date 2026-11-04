// Texto animado

const textos = [
"Desenvolvedor de Software",
"Programador Web",
"Estudante da USTM",
"Full Stack Developer"
];

let index = 0;

function mudarTexto(){

const typed =
document.getElementById("typed");

if(typed){

typed.innerHTML = textos[index];

index++;

if(index >= textos.length){
index = 0;
}

}

}

mudarTexto();

setInterval(mudarTexto,2000);


// Animações das secções

const sections =
document.querySelectorAll("section");

function reveal(){

sections.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


// Formulário WhatsApp

const formulario =
document.getElementById("formWhatsapp");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const assunto =
document.getElementById("assunto").value;

const mensagem =
document.getElementById("mensagem").value;

const texto =

`Olá Djeck!

Nome: ${nome}

Email: ${email}

Assunto: ${assunto}

Mensagem:
${mensagem}`;

window.open(
`https://wa.me/258865155941?text=${encodeURIComponent(texto)}`,
"_blank"
);

});

}