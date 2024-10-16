  
document.addEventListener("DOMContentLoaded", function() {
    // Asegurar que el código JavaScript se ejecute después de cargar la página
    document.getElementById('enviar').addEventListener('click', function() {
      // Capturar los valores del formulario
      var nombre = document.getElementById('nombre').value;
      var  Apellido= document.getElementById('Apellido').value;
      var Edad= document.getElementById('Edad').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;
      
      // Verificar que los campos no estén vacíos
      if (!nombre || !email || !mensaje|| !Apellido || !Edad) {
        alert("Por favor, rellena todos los campos.");
        return;
      }
      
      // Generar el mensaje con los datos capturados
      var textoMensaje = "NOMBRE: " +""+ nombre +"   "+"  "+ "APELLIDO: "+Apellido+" "+" "+ "EDAD: "+Edad+""+ "  "+"EMAIL: " +" "+ email +"  "+ "Mensaje: " + mensaje;
      
      // Codificar el mensaje para URL
      var mensajeCodificado = encodeURIComponent(textoMensaje);
      
      // Número de WhatsApp
      var numeroWhatsApp = "+5491162843698"; // Cambia esto al número de WhatsApp en formato internacional
      
      // Generar el enlace de WhatsApp
      var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensajeCodificado;
      
      // Abrir WhatsApp en una nueva pestaña
      window.open(urlWhatsApp, '_blank');
    });
    
  });
  const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let startDate = null;
let endDate = null;

const calendarBody = document.getElementById('calendarBody');
const currentMonthElement = document.getElementById('currentMonth');
const selectedDatesElement = document.getElementById('selectedDates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  currentMonth--;
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  renderCalendar();
});

function renderCalendar() {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleDateString('default', { month: 'long', year: 'numeric' });
  let days = '';

  for (let i = 1; i <= firstDayIndex; i++) {
    days += `<div class="calendar-day"></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const className = getDayClassName(date);
    days += `<div class="calendar-day ${className}" onclick="selectDate(${i})">${i}</div>`;
  }

  const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const pDiasDeLaSemana = document.getElementById('diasDeLaSemana');
  pDiasDeLaSemana.innerHTML = diasDeLaSemana.join('|');
  calendarBody.innerHTML = days;

  // Agrega el evento de clic a cada número de día en el calendario
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', () => {
      const dayNumber = day.textContent;
      selectDate(dayNumber);
    });
  });
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', () => {
      const dayNumber = day.textContent;
      selectDate(dayNumber);
    });
  });
  
  
}

// Función para obtener el día de la semana correspondiente a un número de día
function getDayOfWeek(dayNumber) {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return daysOfWeek[dayNumber - 1];
}

// Función selectDate() que se llama cuando se hace clic en un número de día
function selectDate(dayNumber) {
  const dayOfWeek = getDayOfWeek(dayNumber);
  console.log(`Horarios para ${dayOfWeek}:`);

  // Aquí debes agregar el código para mostrar los horarios correspondientes a ese día de la semana
}

function selectDate(day) {
  const clickedDate = new Date(currentYear, currentMonth, day);
  if (!startDate || endDate) {
    startDate = clickedDate;
    endDate = null;
  } else if (clickedDate < startDate) {
    startDate = clickedDate;
  } else if (clickedDate > startDate) {
    endDate = clickedDate;
  }
  renderCalendar();
  updateSelectedDates();
}



function updateSelectedDates(){
    if(startDate && endDate){
        selectedDatesElement.textContent = `Fechas seleccionadas: ${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate){
        selectedDatesElement.textContent = `Fechas seleccionadas: ${formatDate(startDate)}`;
    } else {
        selectedDatesElement.textContent = `Fechas seleccionadas:`;
    }
}

function getDayClassName(date){
    if (startDate && date.toDateString() === startDate.toDateString()){
        return 'selected';
    }
    if (endDate && date.toDateString() === endDate.toDateString()){
        return 'selected';
    }
    if (startDate && endDate && date > startDate && date < endDate){
        return 'range';
    }
    return '';
}

function formatDate(date){
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

renderCalendar();

  
   // Función para obtener el valor de un parámetro de la URL
     function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Mostrar el nombre de la imagen seleccionada cuando la página se cargue
    window.onload = function() {
        const imagenSeleccionada = getQueryParam('imagen');
        if (imagenSeleccionada) {
            document.getElementById('imagen-nombre').textContent = imagenSeleccionada;
        } else {
            document.getElementById('imagen-nombre').textContent = "No se seleccionó ninguna imagen";
        }
    };
    
    document.getElementById('colorButton').addEventListener('click', function() {
        // Alterna entre las clases que cambian el color del body
        if (document.body.classList.contains('body-color-3')) {
            document.body.classList.remove('body-color-3');
            document.body.classList.add('body-color-1');
        } else if (document.body.classList.contains('body-color-1')) {
            document.body.classList.remove('body-color-1');
            document.body.classList.add('body-color-2');
        } else {
            document.body.classList.remove('body-color-2');
            document.body.classList.add('body-color-3');
        }
    });
    
    const imagenes = [
        ["img/Kaping y gelificadas/modelo (1).JPG",  "img/Kaping y gelificadas/modelo (2).JPG"]
        [ "/img/Kaping y gelificadas/modelo (3).JPG",  "img/Kaping y gelificadas/modelo (4).JPG"]
        ["img/Kaping y gelificadas/modelo (5).JPG",  "img/Kaping y gelificadas/modelo (6).JPG"]
        [ "img/Kaping y gelificadas/modelo (7).JPG",  "img/Kaping y gelificadas/modelo (8).JPG"]
    ];
    let indice = 0;
   
function kaping()
{
    document.getElementById(".semipermanente2")
    semipermanente2.innerText="El término Kaping se refiere a una técnica utilizada en la aplicación de uñas esculpidas, que consiste en colocar una capa de protección adicional sobre las uñas para darles una mayor resistencia. Generalmente, se usa en uñas que ya están esculpidas, como acrílicas o de gel, para evitar que se quiebren o se dañen con facilidad. Esta técnica puede ser útil para aquellas personas que realizan trabajos manuales o tienen uñas frágiles."
     document.getElementById("nombres");
    nombres.innerText="Kaping  En Gel"
    document.getElementById("nombres2")
    nombres2.innerText=""
    document.getElementById("semipermanente3")
    semipermanente3.innerText = "Las uñas gelificadas son una técnica popular en la manicura en la que se aplica un gel sobre la uña natural o una extensión. Este gel se endurece mediante luz UV o LED, creando una superficie resistente y duradera. Las uñas gelificadas tienen una apariencia más natural en comparación con las uñas acrílicas y suelen durar entre 2 a 3 semanas sin dañarse, dependiendo del crecimiento de la uña natural. Además, son flexibles y brillantes, lo que les da un acabado suave y lustroso."
    document.getElementById("imge1").src = "../img/Kaping y gelificadas/modelo (1).JPG"; 
    document.getElementById("imge2").src = "../img/Kaping y gelificadas/modelo (2).JPG"; 
    document.getElementById("imge3").src = "../img/Kaping y gelificadas/modelo (3).JPG"; 
    document.getElementById("imge4").src = "../img/Kaping y gelificadas/modelo (4).JPG";
    document.getElementById("imge5").src = "../img/Kaping y gelificadas/modelo (5).JPG"; 
    document.getElementById("imge6").src = "../img/Kaping y gelificadas/modelo (6).JPG";
    document.getElementById("imge7").src = "../img/Kaping y gelificadas/modelo (7).JPG"; 
    document.getElementById("imge8").src = "../img/Kaping y gelificadas/modelo (8).JPG"; 
    const nuevoHref = "personalizacion.html?imagen=Kaping En Gel_modelo1";
    document.getElementById("hrefnew1").href =nuevoHref;
    const nuevoHref2 = "personalizacion.html?imagen=Kaping En Gel_modelo2";
    document.getElementById("hrefnew2").href =nuevoHref2;
    const nuevoHref3 = "personalizacion.html?imagen=Kaping En Gel_modelo3";
    document.getElementById("hrefnew3").href =nuevoHref3;
    const nuevoHref4 = "personalizacion.html?imagen=Kaping En Gel_modelo4";
    document.getElementById("hrefnew4").href =nuevoHref4;
    const nuevoHref5 = "personalizacion.html?imagen=Kaping En Gel_modelo5";
    document.getElementById("hrefnew5").href =nuevoHref5;
    const nuevoHref6 = "personalizacion.html?imagen=Kaping En Gel_modelo6";
    document.getElementById("hrefnew6").href =nuevoHref6;
    const nuevoHref7 = "personalizacion.html?imagen=Kaping En Gel_modelo7";
    document.getElementById("hrefnew7").href =nuevoHref7;
    const nuevoHref8 = "personalizacion.html?imagen=Kaping En Gel_modelo8";
    document.getElementById("hrefnew8").href =nuevoHref8;
    document.getElementById("rem")
    rem.innerText=""
}
function semipermanente(){
    location.reload()
}
