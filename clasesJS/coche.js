class Coche {
    constructor(marca, modelo, anio, placas) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
      this.placas = placas;
      this.encendido = false;
    }
  
    arrancar() {
      this.encendido = true;
      console.log(`El coche ${this.marca} ${this.modelo} ${this.placas} está encendido.`);
    }
  
    frenar() {
      if (this.encendido) {
        console.log(`El coche ${this.marca} ${this.modelo} ${this.placas}se detuvo.`);
      } else {
        console.log("No puedes frenar un coche apagado.");
      }
    }
  
    mostrarInfo() {
      console.log(`Coche: ${this.marca} ${this.modelo} ${this.placas}, Año: ${this.anio}`);
    }
  }
  
  // Ejemplo 
  const miCoche = new Coche("Toyota", "Corolla", 2020, "K642AYC");
  miCoche.arrancar();
  miCoche.frenar();
  miCoche.mostrarInfo();
  