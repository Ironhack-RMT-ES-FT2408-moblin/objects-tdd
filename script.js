function capitalizar(nombre) {
  let nombreCap = nombre[0].toUpperCase() + nombre.slice(1);
  return nombreCap;
  // return  nombre[0].toUpperCase() + nombre.slice(1)
}

let username = "bob";

let userNameCap = capitalizar(username);

document.querySelector("body").innerHTML += `hola ${userNameCap}`;

// actividad matrix

function greatestProduct(matrix) {
  let maxMultiplicación = 0;

  // console.log(matrix)

  for (let i = 0; i < matrix.length; i++) {
    // let array = matrix[i]
    // console.log(array)
    for (let j = 0; j < matrix[i].length; j++) {
      // let numero = array[j]

      if (matrix[i][j + 1] !== undefined) {
        // console.log(matrix[i][j]);
        console.log(matrix[i][j + 1]);

        let multiplicaciónHorizontal =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (multiplicaciónHorizontal > maxMultiplicación) {
          maxMultiplicación = multiplicaciónHorizontal;
        }
      }

      if (matrix[i + 1] !== undefined) {
        let multiplicaciónVertical =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (multiplicaciónVertical > maxMultiplicación) {
          maxMultiplicación = multiplicaciónVertical;
        }
      }
    }
  }
  return maxMultiplicación;
}
matrix = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 9, 9],
  [1, 1, 1, 1, 1, 9, 9],
];
// console.log(greatestProduct(matrix))

// OBJETOS

/* 

{
  key: value,
  key: value,
  key: value,
  key: value,
  key: value,
}

{
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
}

*/

const headphones = {
  price: 100,
  isNew: false,
  brand: "SteelSeries",
  "max volume": 90,
  // someArr: ["patata"],
  // someObj: { name: "bob" },
  // someFunction: function() {
  //   // ...
  // }
};

console.log(headphones);

// acceder a propiedad

// notación de puntos
console.log(headphones.price);

// notación de corchetes
console.log(headphones["price"]);

console.log(headphones["max volume"]);

let nombreDePropiedad = "isNew";

console.log(headphones[nombreDePropiedad]);

// manipulacion de objetos

//modificar propiedades
headphones.isNew = true;
console.log(headphones);

// añadir nuevas propiedades
headphones.color = "negro";
console.log(headphones);

// borrar propiedades
delete headphones.brand;
console.log(headphones);

delete headphones["max volume"];
console.log(headphones);

// analizar el objeto

let arrayDePropiedades = Object.keys(headphones);
console.log(arrayDePropiedades);

let arrayDeValoresDePropiedades = Object.values(headphones);
console.log(arrayDeValoresDePropiedades);

for (let nombreDePropiedad in headphones) {
  console.log(nombreDePropiedad); // string
  console.log(headphones[nombreDePropiedad]); // valor de la propiedad
  // console.log(headphones.nombreDePropiedad) // no funciona con notación de puntos!
}

// ejemplo de modificar prototipo de un tipo de data (añadir metodos)
// Array.prototype.saludar = function() {
//   return "hola mundo"
// }

// let array = ["patata", "tomate", "aguacate"]
// console.log(array)
// console.log(array.saludar())

// ESTRUCTURA DE DATA

const users = [
  {
    username: "Samuel",
    bitcoins: 2,
    hasNFTS: false,
  },
  {
    username: "Enrique",
    bitcoins: 0,
    hasNFTS: false,
  },
  {
    username: "Loreto",
    bitcoins: 0.3,
    hasNFTS: true,
  },
  {
    username: "Juan",
    bitcoins: 0.4, // +3
    hasNFTS: false,
  },
];

console.log(users);

console.log(users[1]);

console.log(users[0].bitcoins); // 2
console.log(users[0]["bitcoins"]); // 2

// users[3].bitcoins = users[3].bitcoins + 3
users[3].bitcoins += 3;
console.log(users);

users.splice(1, 0, {
  username: "Ángela",
  bitcoins: 10,
  hasNFTS: false,
});

console.log(users);

function userCryptoCheck(unUsuario) {
  // verifica si un usuario tiene bitcoins o tiene nfts
  // "Está facturando"
  // "No cree en cripto"
  // console.log(unUsuario)

  if (unUsuario.bitcoins > 0 || unUsuario.hasNFTS === true) {
    return `${unUsuario.username} está facturando`;
  } else {
    return `${unUsuario.username} no cree en cripto`;
  }
}

// console.log( userCryptoCheck(users[3]) )

for (let i = 0; i < users.length; i++) {
  // console.log(users[i])
  console.log(userCryptoCheck(users[i]));
}
