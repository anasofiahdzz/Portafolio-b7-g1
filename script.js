// CRUD: Crear Leer Actualizar Borrar
// alert("hola mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// usar el punto es para llamar a una propiedad o a una acción del objeto
// acciones se distinguen por los paréntesis()
typewriter
  .pauseFor(2500)
  .typeString('Sofía Zavala')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Fronted JR')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

// usar el punto es para llamar a una propiedad o a una acción del objeto
// acciones se distinguen por los paréntesis()
typewriterFrase
  .pauseFor(2500)
  .typeString('"... Divide y vencerás ..."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Julio César')
  .pauseFor(1000)
  .start();
  let audioElement; // Variable para almacenar el objeto Audio

  const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
    
  mainElement.addEventListener('click', function() {
      if (!audioElement) {
          audioElement = new Audio('assets/music/misses.mp3');
      }
      audioElement.play();
  });
  
  const pauseButton = document.getElementById('pauseButton');
  
  pauseButton.addEventListener('click', function() {
      if (audioElement.paused) {
          audioElement.play();
          pauseButton.textContent = "Pausar";
      } else {
          audioElement.pause();
          pauseButton.textContent = "Reanudar";
      }
  });