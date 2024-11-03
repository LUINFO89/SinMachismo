// Preguntas y Respuestas
const preguntas = [
    {
        texto: "¿Crees que las tareas del hogar son principalmente responsabilidad de las mujeres?",
        opciones: ["Sí", "A veces", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Es aceptable que un hombre controle cómo se viste su pareja?",
        opciones: ["Sí", "Depende", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Crees que los hombres son naturalmente mejores líderes?",
        opciones: ["Sí", "No siempre", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Piensas que las emociones son un signo de debilidad en los hombres?",
        opciones: ["Sí", "Depende", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Consideras que los chistes machistas son inofensivos?",
        opciones: ["Sí", "A veces", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Es aceptable que los hombres tengan más parejas sexuales que las mujeres?",
        opciones: ["Sí", "Depende", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Piensas que una mujer debería priorizar su familia sobre su carrera?",
        opciones: ["Sí", "A veces", "No necesariamente"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Crees que los hombres son más racionales y las mujeres más emocionales?",
        opciones: ["Sí", "Depende", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Es correcto que los hombres decidan sobre el uso de métodos anticonceptivos en la pareja?",
        opciones: ["Sí", "Depende", "No"],
        puntajes: [2, 1, 0]
    },
    {
        texto: "¿Consideras que las mujeres deben cuidar de los niños más que los hombres?",
        opciones: ["Sí", "A veces", "No"],
        puntajes: [2, 1, 0]
    }
];

let preguntaActual = 0;
let puntajeTotal = 0;

// Funciones anteriores se mantienen (cargarPregunta, responder, mostrarResultados, reiniciar)


// Mostrar una pantalla específica
function showScreen(screenId) {
    document.querySelectorAll(".pantalla").forEach(screen => {
        screen.style.display = "none";
    });
    document.getElementById(screenId).style.display = "flex";
}

// Cargar pregunta
function cargarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById("preguntaNumero").textContent = preguntaActual + 1;
        document.getElementById("preguntaTexto").textContent = pregunta.texto;

        const botones = document.querySelectorAll("#trivia button");
        botones.forEach((boton, index) => {
            boton.textContent = pregunta.opciones[index];
        });
    } else {
        mostrarResultados();
    }
}

// Responder una pregunta
function responder(opcionIndex) {
    puntajeTotal += preguntas[preguntaActual].puntajes[opcionIndex];
    preguntaActual++;
    cargarPregunta();
}

// Mostrar resultados
function mostrarResultados() {
    let resultadoTexto = "";

    if (puntajeTotal <= 2) {
        resultadoTexto = "¡Felicidades! Tienes un pensamiento igualitario. Sigue promoviendo la equidad.";
    } else if (puntajeTotal <= 7) {
        resultadoTexto = "Tienes algunas actitudes machistas. Reflexiona en tus respuestas y trabaja en ser más equitativo.";
    } else {
        resultadoTexto = "Tu pensamiento es predominantemente machista. Considera seriamente revisar tus creencias y comportamientos.";
    }

    document.getElementById("resultadoTexto").textContent = resultadoTexto;
    showScreen("resultados");
}

// Reiniciar trivia
function reiniciar() {
    preguntaActual = 0;
    puntajeTotal = 0;
    showScreen("inicio");
}

// Iniciar trivia
document.addEventListener("DOMContentLoaded", () => {
    showScreen("inicio");
    cargarPregunta();
});

