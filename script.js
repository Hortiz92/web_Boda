// Obtener referencias a las imágenes
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// Agregar event listeners a las imágenes
image1.addEventListener("click", function() {
  toggleScale(image1);
});
image2.addEventListener("click", function() {
  toggleScale(image2);
});
image3.addEventListener("click", function() {
  toggleScale(image3);
});

// Función para alternar la clase "scale"
function toggleScale(image) {
  image.classList.toggle("scale");
}


// Este script revisará el formulario de contacto y usará los datos 
// para enviar un mensaje, tomando el contenido que descarga el usuario.
// Usa el programa local del usuario para enviar el correo.


// Constante que Seleciona el formulario y boton oculto
const $form = document.querySelector('#contact_form')
// Constante que Seleciona el boton oculto
const $buttonMailto = document.querySelector('#formHiden')
// Escucho el evento submit del formulario
$form.addEventListener("submit", handleSubmit)
// Funcion que maneja el formulario. Recibe el evento
function handleSubmit(event){
    // Evito que se refresque la pagina (default action) al darle Enviar
    event.preventDefault();
    // FormData que almacena y valida el formulario. Recibe this(Es el formulario $form)
    const form = new FormData(this)
    // Voy a modificar el atributo href del ancla oculta. Uso template literal ``
    // En el template literal usa ${} para usar expresiones (form.get())
    $buttonMailto.setAttribute('href', `mailto:heorhenry@gmail.com?subject=${form.get('subject')} - ${form.get('name')} | ${form.get('telephone')}&body=${form.get('message')}`) 
    // El ancla oculta se va a hacer click automaticamente
    $buttonMailto.click()
    // Reinicio el formulario
    $form.reset()
    }