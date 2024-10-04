//                repaso a los métodos del objeto Array:                      //
let string = "hola soy un string"

let first__array = ["a", 1, "b", 2, "c", 3]
let second__array = [
  { numero: 1, nombre: "Juan" },
  { numero: 2, nombre: "Ana" },
  { numero: 3, nombre: "Carlos" },
  { numero: 4, nombre: "María" },
  { numero: 5, nombre: "Pedro" },
  { numero: 6, nombre: "Lucía" },
  { numero: 7, nombre: "José" },
  { numero: 8, nombre: "Elena" },
  { numero: 9, nombre: "Diego" },
  { numero: 10, nombre: "Sofía" },
];
function reset() {
  second__array = [
    { numero: 1, nombre: "Juan" },
    { numero: 2, nombre: "Ana" },
    { numero: 3, nombre: "Carlos" },
    { numero: 4, nombre: "María" },
    { numero: 5, nombre: "Pedro" },
    { numero: 6, nombre: "Lucía" },
    { numero: 7, nombre: "José" },
    { numero: 8, nombre: "Elena" },
    { numero: 9, nombre: "Diego" },
    { numero: 10, nombre: "Sofía" },
  ];
  first__array = ["a", 1, "b", 2, "c", 3];
}
/////////////////////////////////////////////////////////////////////////////

  const first__find = first__array.find((e)=>e==="a")
  const second__find = second__array.find((e) => e.numero == 2);
    //console.log("resultado del método first__find: ", first__find);
    //console.log("first__array después del first__find: ", first__array);
    //console.log("resultado del método second__find: ", second__find);
    //console.log("second__array después del second__find: ", second__array);

  reset();
  const first__filter = first__array.filter((e)=>typeof(e)=== "number")
  const second__filter = second__array.filter((e) => e.numero % 2 == 0);

    //console.log("resultado del método first__filter: ", first__filter);
    //console.log("first__array después del first__filter: ", first__array);
    //console.log("resultado del método second__filter: ", second__filter);
    //console.log("second__array después del second__filter: ", second__array);

  reset();

  const first__map = first__array.map((e)=>e+10)
  const second__map = second__array.map((e) => e.numero);

    //console.log("resultado del método first__map: ", first__map);
    //console.log("first__array después del first__map: ", first__array);
    //console.log("resultado del método second__map: ", second__map);
    //console.log("second__array después del second__map: ", second__array);

  reset();
  const first__splice = first__array.splice(0,2,"d",4)
  const second__splice = second__array.splice(
    0,
    2,
    { numero: 11, nombre: "john" },
    { numero: 12, nombre: "mary" }
  );
    //console.log("resultado del método first__splice: ", first__splice);
    //console.log("first__array después del first__splice: ", first__array);
    //console.log("resultado del método second__splice: ", second__splice);
    //console.log("second__array después del second__splice: ", second__array);

  reset();

  const first__pop = first__array.pop();
  const second__pop = second__array.pop()

    //console.log("resultado del método first__pop: ", first__pop);
    //console.log("first__array después del first__pop: ", first__array);
    //console.log("resultado del método second__pop: ", second__pop);
    //console.log("second__array después del second__pop: ", second__array);

  reset();
  const first__includes = first__array.includes("a");
  const second__includes = second__array.includes({ numero: 1, nombre: "Juan" });

    //console.log("resultado del método first__includes: ", first__includes);
    //console.log("first__array después del first__includes: ", second__array);
    //console.log("resultado del método second__includes: ", second__includes);
    //console.log("second__array después del second__includes: ", second__array);

  reset()

  const first__some = first__array.some((item) => item === "a");
  const second__some = second__array.some(
    (item) => item.numero === 1 && item.nombre === "Juan"
  );

    //console.log("resultado del método first__some: ", first__some);
    //console.log("first__array después del some: ", first__array);
    //console.log("resultado del método second__some: ", second__some);
    //console.log("second__array después del some: ", second__array);

  reset();


  const first__indexOF = first__array.indexOf("a")
  const second__indexOf = second__array.indexOf({ numero: 1, nombre: "Juan" });
    //console.log("resultado del método first__indexOF: ", first__indexOF);
    //console.log("first__array después del first__indexOF: ", first__array);
    //console.log("resultado del método second__indexOf: ", second__indexOf);
    //console.log("second__array después del second__indexOf: ", second__array);

  

  reset()

  const first__slice = first__array.slice(1.5)
  const second__slice = second__array.slice(5,10)  

    //console.log("resultado del método first__slice: ", first__slice);
    //console.log("first__array después del first__slice: ", first__array);
    //console.log("resultado del método second__slice: ", second__slice);
    //console.log("second__array después del second__slice: ", second__array);

  const first__join = first__array.join("")
  
    //console.log("resultado del método first__join: ", first__join);
    //console.log("first__array después del first__join: ", first__array);

  const first__split = string.split("")
    //console.log("resultado del método first__split: ", first__split);
    //console.log("string después del first__split: ", string);





