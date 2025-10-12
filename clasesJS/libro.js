class Libro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
      this.leido = false;
    }
  
    leer() {
      this.leido = true;
      console.log(`Ya terminaste de leer "${this.titulo}" de ${this.autor}.`);
    }
  
    marcarComoNoLeido() {
      this.leido = false;
      console.log(`"${this.titulo}" ha sido marcado como no leído.`);
    }
  
    info() {
      console.log(`"${this.titulo}" — ${this.autor}, ${this.paginas} páginas. ¿Leído?: ${this.leido}`);
    }
  }
  
  // Ejemplo
  const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 471);
  miLibro.info();
  miLibro.leer();
  miLibro.info();
  miLibro.marcarComoNoLeido();
  