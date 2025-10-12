class Animal {
    constructor(nombre, especie, edad) {
      this.nombre = nombre;
      this.especie = especie;
      this.edad = edad;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido raro${this.especie}.`);
    }
  
    comer(comida) {
      console.log(`${this.nombre} está comiendo ${comida}.`);
    }
  
    envejecer() {
      this.edad++;
      console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
    }
  }
  
  // Ejemplo
  const miPerro = new Animal("Nina", "Perro", 1);
  miPerro.hacerSonido();
  miPerro.comer("huevo(aveces)");
  miPerro.envejecer();
  