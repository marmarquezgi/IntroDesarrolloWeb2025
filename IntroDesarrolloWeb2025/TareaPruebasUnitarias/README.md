Investigacion de algunas funciones usando jest

.toEqual()
Compara que dos valores u objetos sean iguales en estructura y contenido, haciendo una comparación profunda.
Tambien se usa para comparar recursivamente todas las propiedades de las instancias de objetos (también conocido como igualdad “profunda”). Este método utiliza Object.is para comparar valores primitivos

.toBeTruthy()
Usa .toBeTruthy cuando no te importa cuál es el valor exacto y solo quieres asegurarte de que el valor sea verdadero en un contexto booleano

.toBeFalsy()
Usa .toBeFalsy cuando no te importa cuál es el valor exacto y solo quieres asegurarte de que el valor sea falso en un contexto booleano.

.toBeNull()
.toBeNull() es lo mismo que .toBe(null), pero los mensajes de error son un poco más claros. Así que usa .toBeNull() cuando quieras verificar que algo es null.
Comprueba que el valor sea exactamente null.

.toBeUndefined()
Sirve para confirmar que algo no fue definido, no existe, o no devuelve ningún valor.
Es útil cuando esperas que cierta función regrese undefined en situaciones donde no hay un resultado válido.

.toThrow()
Usa .toThrow para probar que una función lanza un error cuando es llamada.

.toStrictEqual()
Similar a .toEqual(), pero también verifica que el tipo y estructura del objeto sean exactamente iguales, sin ignorar propiedades undefined o tipos diferentes.