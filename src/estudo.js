class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.user = "user";
  }

  mostrarUser() {
    console.log("user");
  }
}

let MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaLista.add("novo");
};
MinhaLista.mostrarUser();

class Math2 {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Math2.soma(5, 1));

// array

const arr = [1, 3, 11, 4, 5, 6, 7, 8];

const newArr = arr.map((item, index) => {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);

let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log(total);

const filtro = arr.filter(item => {
  return item % 2 === 0;
});

console.log(filtro);

const achar = arr.find(item => {
  return item === 4;
});

console.log(achar);

const user = {
  nome: "Eu",
  idade: 19,
  endereco: {
    cidade: "Zurique",
    estado: " Cantão de Zurique"
  }
};

//const {nome, idade, endereco: { cidade }} = user;
//console.log(nome)
//console.log(idade)
//console.log(cidade)

//Rest - pegar o resto das propriedades

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

const arry = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arry;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4));

//SPREAD
const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];
const arry3 = [...arry1, ...arry2];
console.log(arry3);

const user2 = { ...user, nome: "Vc" };
console.log(user2);


