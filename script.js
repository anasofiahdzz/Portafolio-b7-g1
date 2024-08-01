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
  .typeString('nombre de frase')
  .pauseFor(1000)
  .start();