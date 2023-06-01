export const generateArrayNumbers = (numeroCentral, cantidadNumeros) => {
  const numeros = Array.from({ length: cantidadNumeros }, (_, index) => {
    const desplazamiento = index - Math.floor(cantidadNumeros / 2);
    const valor = (numeroCentral + desplazamiento * 0.01)
      .toFixed(2)
      .padStart(5, '0');
    return {
      value: Math.abs(parseFloat(valor)),
      label: valor.replace('-', ''),
    };
  });

  return numeros;
};
