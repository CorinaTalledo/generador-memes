
// CAMBIO DE ASIDE

//1) ELEMENTOS DEL HTML
const imgAside = document.getElementById('img-aside')
const textAside = document.getElementById('text-aside');

const imgButton = document.getElementById('img-button')
const textButton = document.getElementById('text-button')



// 2) FUNCION PARA OCULTAR EL TEXT ASIDE
const hideTextAside = (e) =>{
    textAside.classList.add(`is-hidden`);
    imgAside.classList.remove(`is-hidden`)
};


// 2) FUNCION PARA OCULTAR EL IMG ASIDE
const hideImgAside = (e) =>{
    imgAside.classList.add(`is-hidden`)
    textAside.classList.remove(`is-hidden`);
};


// 3) ACTIVO LAS FUNCIONES
imgButton.addEventListener('click', (e)=>hideTextAside(e));
textButton.addEventListener('click', (e)=>hideImgAside(e));


// ------------------------------------


// MODO CLARO

// 1) ELEMENTOS DEL HTML


// // 2) FUNCION PARA ACTIVAR MODO CLARO
// const lightMode = (e) =>{
//     darkButton.classList.add(`is-hidden`)
//     lightButton.classList.remove(`is-hidden`)
// };


// const darkMode = (e) =>{
//     lightButton.classList.add(`is-hidden`)
//     darkButton.classList.remove(`is-hidden`)
// };


// // 3) ACTIVO FUNCIONES
// lightButton.addEventListener('click', (e)=>lightMode(e));
// darkButton.addEventListener('click', (e)=>darkMode(e));


// ----------------------------

// 1) ELEMENTOS DEL HTML

const body = document.getElementById('body')
const header = document.getElementById('header')
const main = document.getElementById('main')
const ctrlBtnInputs = document.getElementsByClassName('ctrl-btn-inputs')


// const imgAside = document.getElementById('img-aside')
// const textAside = document.getElementById('text-aside');

const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button')


// // 2) CREAR FUNCION
const changeMode = () =>{
    textAside.classList.toggle('light-aside');
    imgAside.classList.toggle('light-aside');
    body.classList.toggle('light-body');
    header.classList.toggle('light-header');
    main.classList.toggle('light-main');
};


// // 3) ACTIVO FUNCION
darkButton.addEventListener('click', ()=>changeMode());


/*
.light-body, .light-header, .light-main, .light-aside, .light-ctrl-btn-inputs, .light-ctrl-btn-inputs:hover, .light-ctrl-btn-inputs:focus
*/


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
const colorPicker = document.getElementById('input-color-img');


// // 2) FUNCION PARA CAMBIAR EL COLOR DEL FONDO
const changeBackgroundColor = (e) =>{
    memeImg.style.backgroundColor = `${colorPicker.value}`
}


// // 3) ACTIVO LA FUNCION
colorPicker.addEventListener('input', (e)=>changeBackgroundColor(e));

// ------------------


// CAMBIO DEL SPAN DEL COLOR

// 1) ELEMENTO DEL HTML
const colorFondoName = document.getElementById('color-fondo-name')

// const colorPicker = document.getElementById('color-fondo-img'); (reutilizado)


// 2) CREO FUNCION PARA QUE CAMBIE EL SPAN SEGUN EL VALOR DEL INPUT COLOR
const imgColorName = (e) =>{
    //console.log(e.target.value);
    colorFondoName.innerHTML = `${colorPicker.value}`
};


// 3) ACTIVO LA FUNCION
colorPicker.addEventListener('input', (e)=>imgColorName(e));


// -------------------------

// SELECT DE MEZCLA DE LA IMAGEN

const blendSelect = document.getElementById('blend-select');

// const memeImg = document.getElementById('meme-img');


blendSelect.addEventListener('input', ()=>{
    memeImg.style.backgroundBlendMode = `${blendSelect.value}`
});


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


//3) FUNCION PARA APLICAR LOS FILTROS A LA IMAGEN DEL MEME
const filtros = (e) =>{
    //console.log(e.target.value); //luego sacar
    memeImg.style.filter = `brightness(${brilloInput.value}) opacity(${opacidadInput.value}) contrast(${contrasteInput.value}%) blur(${desenfoqueInput.value}px) grayscale(${grisesInput.value}%) hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturadoInput.value}%) invert(${negativoInput.value})`
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


// CAMBIO DE TEXTO SUPERIOR E INFERIOR

// 1) ELEMENTOS DEL HTML
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');

const memeTopText = document.getElementById('meme-top-text');
const memeBottomText = document.getElementById('meme-bottom-text')


// 2) ARMO FUNCIONES

const changeTopText = (e) =>{
    memeTopText.innerHTML = `${topTextInput.value}`
};

const changeBottomText = (e) =>{
    memeBottomText.innerHTML = `${bottomTextInput.value}`
};


// 3) ACTIVO FUNCIONES
topTextInput.addEventListener('input',(e) =>(changeTopText(e)))
bottomTextInput.addEventListener('input',(e) =>(changeBottomText(e)))


// -----------------------------------

// ACTIVO Y DESACTIVO CHECKBOX DE TEXTO

// 1) ELEMENTOS HTML
const topCheckbox = document.getElementById('top-checkbox');
const bottomCheckbox = document.getElementById('bottom-checkbox');memeBottomText

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// 2) ARMAR FUNCIONES
const hideTopText = (e) =>{
    if (topCheckbox.checked){
        memeTopText.classList.add('is-hidden')
    } else{
        memeTopText.classList.remove('is-hidden')
    }
};


const hideBottomText = (e) =>{
    if (bottomCheckbox.checked){
        memeBottomText.classList.add('is-hidden')
    } else{
        memeBottomText.classList.remove('is-hidden')
    }
};


// 3) ACTIVO FUNCIONES
topCheckbox.addEventListener('change', (e)=>hideTopText(e));
bottomCheckbox.addEventListener('change', (e)=>hideBottomText(e));


// --------------------------


// CAMBIO DE FUENTE

// 1) Elemento del html
const fontFamily = document.getElementById('font-family')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// 2) ARMO FUNCIONES
const changeFontFamily = (e) =>{
    memeTopText.style.fontFamily = `${fontFamily.value}`;
    memeBottomText.style.fontFamily = `${fontFamily.value}`;
};


// 3) ACTIVO FUNCION
fontFamily.addEventListener('change', (e)=>changeFontFamily(e));


// ---------------------

// TAMAÑO DE LETRA

// 1) Elementos del html
const fontSizeInput = document.getElementById('font-size-input');

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// 2) Armo funcion
const changeFontSize = (e) =>{
    memeTopText.style.fontSize = `${fontSizeInput.value}rem`;
    memeBottomText.style.fontSize = `${fontSizeInput.value}rem`;
};


// 3) Activo la funcion
fontSizeInput.addEventListener('input', (e)=>changeFontSize(e));

//--------------------------


// ALINEACION DEL TEXTO

// 1) ELEMENTOS DEL HTML
const leftAlignBtn = document.getElementById('left-align-btn');
const centerAlignBtn = document.getElementById('center-align-btn');
const rightAlignBtn = document.getElementById('right-align-btn');

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// 2) Armo funcion
leftAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
});


centerAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'center';
    memeBottomText.style.textAlign = 'center';
});


rightAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'right';
    memeBottomText.style.textAlign = 'right';
});


//---------------------

// COLORES DEL TEXTO Y SU FONDO

const textColorPicker = document.getElementById('input-color-text')
const textBkgColorPicker = document.getElementById('input-color-bkg-text')

const textColorName = document.getElementById('text-color-name')
const textBkgColorName = document.getElementById('text-bkg-color-name')

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


textColorPicker.addEventListener('input', ()=>{
    memeTopText.style.color = `${textColorPicker.value}`;
    memeBottomText.style.color = `${textColorPicker.value}`;

    textColorName.innerHTML = `${textColorPicker.value}`;
});


textBkgColorPicker.addEventListener('input', ()=>{
    memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`;
    memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`;

    textBkgColorName.innerHTML = `${textBkgColorPicker.value}`;
});


//---------------------

// CHECKBOX FONDO TRANSPARENTE

// 1) ELEMENTOS HTML
const checkboxSinFondo = document.getElementById('checkbox-sin-fondo');

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// 3) ACTIVO FUNCIONES
checkboxSinFondo.addEventListener('change', ()=>{
    if (checkboxSinFondo.checked){
        memeTopText.style.backgroundColor = 'transparent'
        memeBottomText.style.backgroundColor = 'transparent'
    } else{
        memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`
        memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`
    }
});

 // const textBkgColorPicker = document.getElementById('input-color-bkg-text')


//--------------------------------

//CONTORNO DEL TEXTO

const contornTextNone = document.getElementById('contorn-text-none');
const contornTextWhite = document.getElementById('contorn-text-white')
const contornTextBlack = document.getElementById('contorn-text-black')

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')

contornTextNone.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = 'transparent'
    memeBottomText.style.webkitTextStroke = 'transparent'
});

contornTextWhite.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px white'
    memeBottomText.style.webkitTextStroke = '2px white'
});

contornTextBlack.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px black'
    memeBottomText.style.webkitTextStroke = '2px black'
});

//----------------------

// ESPACIADO

const inputSpacing = document.getElementById('input-spacing')

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')

inputSpacing.addEventListener('input', ()=>{
    memeTopText.style.padding = `${inputSpacing.value}px 0px`
    memeBottomText.style.padding = `${inputSpacing.value}px 0px`
}); 



//-----------------------

// INTERLINEADO DEL TEXTO
const interlineado = document.getElementById('interlineado')

interlineado.addEventListener('change', ()=>{
    memeTopText.style.lineHeight = `${interlineado.value}`
    memeBottomText.style.lineHeight = `${interlineado.value}`
});


//---------------------

// BOTON RESET

const resetBtn = document.getElementById('reset-btn');

const btnResetFilters = () =>{
    brilloInput.value = "100"
    opacidadInput.value = "100"
    contrasteInput.value = "0"
    desenfoqueInput.value = "0"
    grisesInput.value = "0"
    sepiaInput.value = "0"
    hueInput.value = "0"
    saturadoInput.value = "0"
    negativoInput.value = "0"
    filtros()
}

resetBtn.addEventListener ("click", btnResetFilters)



//--------------------------

// PARA APLICAR EL BOTON DE DESCARGA

const downloadMemeBtn = document.getElementById("download-meme-btn");
const meme = document.getElementById("meme-box");

downloadMemeBtn.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};