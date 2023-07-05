
// CAMBIO DE LA IMAGEN DEL MEME

// 1) ELEMENTOS DE LA IMAGEN DEL MEME
const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-img');


// 2) FUNCION PARA CAMBIAR LA IMAGEN DEL MEME
const changeBackground = (e) =>{
    // console.log(e.target.value); // Sacar despues
    memeImg.style.backgroundImage = `url(${urlInput.value})`;
}


// 3) ACTIVO LA FUNCION
urlInput.addEventListener('input', (e)=>changeBackground(e));


// ----------------------------


// CAMBIO DEL COLOR DEL FONDO DEL MEME

//1) ELEMENTO DEL INPUT COLOR DEL HTML
const fondoMeme = document.getElementById('fondo-img-input');

// // 2) FUNCION PARA CAMBIAR EL COLOR DEL FONDO
const changeBackgroundColor = (e) =>{
    memeImg.style.backgroundColor = `${fondoMeme.value}`;
}


// // 3) ACTIVO LA FUNCION
fondoMeme.addEventListener('input', (e)=>changeBackgroundColor(e));

// ------------------


// CAMBIO DEL SPAN DEL COLOR

// 1) ELEMENTO DEL HTML
// const fondoSpan = document.getElementById('fondo-img-span')


// // 2) CREO FUNCION PARA QUE CAMBIE EL SPAN SEGUN EL VALOR DEL INPUT COLOR
// const changeSpan = (e) =>{
//     // console.log(e.target.value);
//     fondoSpan.textContentL = `(e.target.value)`
// };


// // 3) ACTIVO LA FUNCION
// fondoSpan.addEventListener('input', (e)=>changeSpan(e))










// ------------------------------



// FILTROS

//1) ELEMENTOS DE LOS INPUTS DE FILTROS
const brilloInput = document.getElementById('brillo-input')
const opacidadInput = document.getElementById('opacidad-input')
const contrasteInput = document.getElementById ('contraste-input')
const desenfoqueInput = document.getElementById ('desenfoque-input')
const grisesInput = document.getElementById ('grises-input')
const sepiaInput = document.getElementById ('sepia-input')
const hueInput = document.getElementById ('hue-input')
const saturadoInput = document.getElementById ('saturado-input')
const negativoInput = document.getElementById ('negativo-input')


//2) Pruebo si funciona cada cosa
// console.log(brilloInput.value); 
// console.log(opacidadInput.value);
// console.log(contrasteInput.value); 
// console.log(desenfoqueInput.value); 
// console.log(grisesInput.value); 
// console.log(sepiaInput.value); 
// console.log(hueInput.value); 
// console.log(saturadoInput.value); 
// console.log(negativoInput.value); 


//3) FUNCION PARA APLICAR LOS FILTROS A LA IMAGEN DEL MEME
const filtros = (e) =>{
    console.log(e.target.value); //luego sacar

    memeImg.style.filter = `brightness(${brilloInput.value}) opacity(${opacidadInput.value}) contrast(${contrasteInput.value}%) blur(${desenfoqueInput.value}px) grayscale(${grisesInput.value}%) hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturadoInput.value}%) invert(${negativoInput.value})
    `
};


//4) ACTIVO LAS FUNCIONES DE LOS INPUTS
brilloInput.addEventListener('input', (e)=>filtros(e));
opacidadInput.addEventListener('input', (e)=>filtros(e));
contrasteInput.addEventListener('input', (e)=>filtros(e));
desenfoqueInput.addEventListener('input', (e)=>filtros(e));
grisesInput.addEventListener('input', (e)=>filtros(e));
sepiaInput.addEventListener('input', (e)=>filtros(e));
hueInput.addEventListener('input', (e)=>filtros(e));
saturadoInput.addEventListener('input', (e)=>filtros(e));
negativoInput.addEventListener('input', (e)=>filtros(e));

// -----------------------------------











