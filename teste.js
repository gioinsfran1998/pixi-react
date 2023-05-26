function generateNumberSequence() {
  const numberSequence = [];

  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
      const formattedNumber = `${i.toString().padStart(2, '0')}.${j
        .toString()
        .padStart(1, '0')}`;
      numberSequence.push(formattedNumber);
    }
  }

  return numberSequence;
}

const sequence = generateNumberSequence();
console.log(sequence);

const numbers = [
  {
    value: 0.0,
    label: '00.00',
  },
  {
    value: 0.01,
    label: '0.01',
  },
  {
    value: 0.02,
    label: '0.02',
  },
  {
    value: 0.03,
    label: '0.03',
  },
  {
    value: 0.04,
    label: '0.04',
  },
  {
    value: 0.05,
    label: '0.05',
  },
  {
    value: 0.06,
    label: '0.06',
  },
  {
    value: 0.07,
    label: '0.07',
  },
  {
    value: 0.08,
    label: '0.08',
  },
  {
    value: 0.09,
    label: '0.09',
  },
];

// Función para generar un número aleatorio en un rango específico
function generarNumeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

// Generar 10 números aleatorios
const numerosAleatorios = Array.from({ length: 10 }, () =>
  generarNumeroAleatorio(0.0, 100.0).toFixed(2)
);

// console.log(numerosAleatorios);

// Función para generar el array de números
function generarArrayNumeros(numeroCentral, cantidadNumeros) {
  const numeros = Array.from({ length: cantidadNumeros }, (_, index) => {
    const desplazamiento = index - Math.floor(cantidadNumeros / 2);
    const valor = (numeroCentral + desplazamiento * 0.01).toFixed(2);
    return {
      value: Math.abs(parseFloat(valor)),
      label: valor.replace('-', ''),
    };
  });

  return numeros;
}

// Ejemplo de uso
const numeroCentral = 12.53;
const arrayNumeros = generarArrayNumeros(numeroCentral, 11);

console.log(arrayNumeros);
