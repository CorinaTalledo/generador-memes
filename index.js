// ---------------------------------------------
//      FUNCIONES DE LOS BOTONES DEL HEADER
// ---------------------------------------------


// 1) Botones "Imagen" y "Texto"

// Elementos del html
const imgButton = document.getElementById('img-button');
const textButton = document.getElementById('text-button')

const imgAside = document.getElementById('img-aside')
const textAside = document.getElementById('text-aside');


// Esconder aside del texto
imgButton.addEventListener('click', ()=>{
    textAside.classList.add(`is-hidden`);
    imgAside.classList.remove(`is-hidden`)
});


// Esconder aside de imagen
textButton.addEventListener('click', ()=>{
    imgAside.classList.add(`is-hidden`)
    textAside.classList.remove(`is-hidden`);
});


// ------------------------------------

// 2) Cambio de Modo

// Elementos del html
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');
const body = document.body;


// Funcion para cambiar de tema
const changeTheme = () =>{
    let currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark'){
        newTheme = 'light'
    } else {
        newTheme = 'dark'
    }

    body.setAttribute('data-theme', newTheme);
};


// Funcion para que cambie el boton del tema oscuro
darkButton.addEventListener('click', () =>{
    changeTheme();
    darkButton.classList.add('is-hidden');
    lightButton.classList.remove('is-hidden');
});


// Funcion para cambiar el boton del tema claro
lightButton.addEventListener('click', () =>{
    changeTheme();
    lightButton.classList.add('is-hidden');
    darkButton.classList.remove('is-hidden');
});


// --------------------------------
//          ASIDE IMAGEN
// --------------------------------


// 1) URL >> Cambio de imagen

// Elementos del html
const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-img');


// Funcion para cambio de imagen
urlInput.addEventListener('input', ()=>{
    memeImg.style.backgroundImage = `url(${urlInput.value})`;
});


// ----------------------------

// 2) Color del fondo del meme

// Elementos del html
const colorPicker = document.getElementById('input-color-img');
const colorFondoName = document.getElementById('color-fondo-name')

// const memeImg = document.getElementById('meme-img'); 


// Funcion para cambiar el color del fondo de la imagen
colorPicker.addEventListener('input', ()=>{
    memeImg.style.backgroundColor = `${colorPicker.value}`
    colorFondoName.innerHTML = `${colorPicker.value}`
});


// -------------------------


// 3) Select de filtro automatico de la imagen

// Elementos del html
const blendSelect = document.getElementById('blend-select');
// const memeImg = document.getElementById('meme-img');


// Funcion para activar el select
blendSelect.addEventListener('input', ()=>{
    memeImg.style.backgroundBlendMode = `${blendSelect.value}`
});


// ------------------------------

// 4) Filtros (ranges)

// Elementos del html
const brilloInput = document.getElementById('brillo-input')
const opacidadInput = document.getElementById('opacidad-input')
const contrasteInput = document.getElementById ('contraste-input')
const desenfoqueInput = document.getElementById ('desenfoque-input')
const grisesInput = document.getElementById ('grises-input')
const sepiaInput = document.getElementById ('sepia-input')
const hueInput = document.getElementById ('hue-input')
const saturadoInput = document.getElementById ('saturado-input')
const negativoInput = document.getElementById ('negativo-input')


// Funcion para aplicar los filtros
const filtros = (e) =>{
    memeImg.style.filter = `brightness(${brilloInput.value}) opacity(${opacidadInput.value}) contrast(${contrasteInput.value}%) blur(${desenfoqueInput.value}px) grayscale(${grisesInput.value}%) hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturadoInput.value}%) invert(${negativoInput.value})`
};


// Activar funciones
brilloInput.addEventListener('input', (e)=>filtros(e));
opacidadInput.addEventListener('input', (e)=>filtros(e));
contrasteInput.addEventListener('input', (e)=>filtros(e));
desenfoqueInput.addEventListener('input', (e)=>filtros(e));
grisesInput.addEventListener('input', (e)=>filtros(e));
sepiaInput.addEventListener('input', (e)=>filtros(e));
hueInput.addEventListener('input', (e)=>filtros(e));
saturadoInput.addEventListener('input', (e)=>filtros(e));
negativoInput.addEventListener('input', (e)=>filtros(e));


//-------------------------------

// 5) Boton de reestablecer filtros

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



// -----------------------------------
//             ASIDE TEXTO
// -----------------------------------


// 1) Modificacion del texto superior e inferior

// Elementos del html
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');

const memeTopText = document.getElementById('meme-top-text');
const memeBottomText = document.getElementById('meme-bottom-text')

// Funcion del texto superior
topTextInput.addEventListener('input',() =>{
    memeTopText.innerHTML = `${topTextInput.value}`
});

// Funcion del texto inferior
bottomTextInput.addEventListener('input',() =>{
    memeBottomText.innerHTML = `${bottomTextInput.value}`
});


// -----------------------------------

// 2) Checkbox "Sin texto..."

// Elementos del html
const topCheckbox = document.getElementById('top-checkbox');
const bottomCheckbox = document.getElementById('bottom-checkbox');

// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion para el checkbox de texto superior
topCheckbox.addEventListener('change', ()=>{
    if (topCheckbox.checked){
        memeTopText.classList.add('is-hidden')
    } else{
        memeTopText.classList.remove('is-hidden')
    }
});


// Funcion para el checkbox de texto inferior
bottomCheckbox.addEventListener('change', ()=>{
    if (bottomCheckbox.checked){
        memeBottomText.classList.add('is-hidden')
    } else{
        memeBottomText.classList.remove('is-hidden')
    }
});


// --------------------------


// 3) Select de cambio de fuente

// Elementos del html
const fontFamily = document.getElementById('font-family')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion para el select
fontFamily.addEventListener('change', ()=>{
    memeTopText.style.fontFamily = `${fontFamily.value}`;
    memeBottomText.style.fontFamily = `${fontFamily.value}`;
});


// ---------------------


// 4) Tamaño de letra

// Elementos del html
const fontSizeInput = document.getElementById('font-size-input');
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion para el cambio de tamaño de letra
fontSizeInput.addEventListener('input', ()=>{
    memeTopText.style.fontSize = `${fontSizeInput.value}rem`;
    memeBottomText.style.fontSize = `${fontSizeInput.value}rem`;
});


//--------------------------


// 5) Alineacion del texto

// Elementos del html
const leftAlignBtn = document.getElementById('left-align-btn');
const centerAlignBtn = document.getElementById('center-align-btn');
const rightAlignBtn = document.getElementById('right-align-btn');
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Izquierda
leftAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
});


// Centro
centerAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'center';
    memeBottomText.style.textAlign = 'center';
});


// Derecha
rightAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'right';
    memeBottomText.style.textAlign = 'right';
});


//---------------------

// 6) Color y nombre del color del texto

// Elementos del html
const textColorPicker = document.getElementById('input-color-text')
const textColorName = document.getElementById('text-color-name')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion de cambio de color y nombre del color del texto
textColorPicker.addEventListener('input', ()=>{
    memeTopText.style.color = `${textColorPicker.value}`;
    memeBottomText.style.color = `${textColorPicker.value}`;

    textColorName.innerHTML = `${textColorPicker.value}`;
});


//---------------------

// 7) Color y nombre del color del fondo deltexto

// Elementos del html
const textBkgColorPicker = document.getElementById('input-color-bkg-text')
const textBkgColorName = document.getElementById('text-bkg-color-name')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion para cambiar el color y el nombre del color del texto inferior
textBkgColorPicker.addEventListener('input', ()=>{
    memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`;
    memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`;

    textBkgColorName.innerHTML = `${textBkgColorPicker.value}`;
});


//---------------------

// 8) Checkbox "Fondo transparente"

// Elementos del html
const checkboxSinFondo = document.getElementById('checkbox-sin-fondo');
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion para el checkbox del fondo transparente
checkboxSinFondo.addEventListener('change', ()=>{
    if (checkboxSinFondo.checked){
        memeTopText.style.backgroundColor = 'transparent'
        memeTopText.style.position = 'absolute'

        memeBottomText.style.backgroundColor = 'transparent'
        memeBottomText.style.position = 'absolute'

    } else{
        memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`
        memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`
    }
});


//--------------------------------

// 9) Botones del contorno del texto

const contornTextNone = document.getElementById('contorn-text-none');
const contornTextWhite = document.getElementById('contorn-text-white')
const contornTextBlack = document.getElementById('contorn-text-black')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')

// Ninguno
contornTextNone.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = 'transparent'
    memeBottomText.style.webkitTextStroke = 'transparent'
});


// Claro
contornTextWhite.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px white'
    memeBottomText.style.webkitTextStroke = '2px white'
});


// Oscuro
contornTextBlack.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px black'
    memeBottomText.style.webkitTextStroke = '2px black'
});


//----------------------

// 10) Espaciado entre el texto y la imagen del meme

// Elementos del html
const inputSpacing = document.getElementById('input-spacing')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion del espaciado
inputSpacing.addEventListener('input', ()=>{
    memeTopText.style.padding = `${inputSpacing.value}px 0px`
    memeBottomText.style.padding = `${inputSpacing.value}px 0px`
}); 


//-----------------------

// 11) Interlineado del texto

// Elementos del html
const interlineado = document.getElementById('interlineado')
// const memeTopText = document.getElementById('meme-top-text');
// const memeBottomText = document.getElementById('meme-bottom-text')


// Funcion del interlineado
interlineado.addEventListener('change', ()=>{
    memeTopText.style.lineHeight = `${interlineado.value}`
    memeBottomText.style.lineHeight = `${interlineado.value}`
});


//---------------------------------
//      BOTON DE DESCARGA
//---------------------------------


// Elementos del html
const downloadMemeBtn = document.getElementById("download-meme-btn");
const meme = document.getElementById("meme-box");

downloadMemeBtn.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};


//---------------------------------
//      MEDIAS QUERIES
//---------------------------------

// 1) Funcion para que los asides desaparezcan, y se muestren las x

// Elementos del html
const closeTextAside = document.getElementById('close-text-aside');
const closeImgAside = document.getElementById('close-img-aside');

// const imgAside = document.getElementById('img-aside')
// const textAside = document.getElementById('text-aside');

// Funcion para que desaparezcan los asides y aparezcan las x
const resizeWindow = () => {
    if(body.getBoundingClientRect().width < 1000) {
        imgAside.classList.add("is-hidden")
        textAside.classList.add("is-hidden")

        closeTextAside.classList.remove("is-hidden")
        closeImgAside.classList.remove("is-hidden")
    } else {
        imgAside.classList.remove("is-hidden")
        textAside.classList.add("is-hidden")

        closeTextAside.classList.add("is-hidden")
        closeImgAside.classList.add("is-hidden")
    }
}

window.addEventListener("resize", resizeWindow)


// ------------------

// 2) Funcion para que la x que cierran los asides, funcionen.

// Elementos del html

// const closeTextAside = document.getElementById('close-text-aside');
// const closeImgAside = document.getElementById('close-img-aside');

// const imgAside = document.getElementById('img-aside')
// const textAside = document.getElementById('text-aside');


// Funcion para que las x funcionen
closeTextAside.addEventListener('click', ()=>{
    textAside.classList.add("is-hidden")
});


closeImgAside.addEventListener('click', ()=>{
    imgAside.classList.add("is-hidden")
});









