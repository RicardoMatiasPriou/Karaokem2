//// filtro de repetidos////
Array.prototype.unique = (function (a) {
  return function () {
    return this.filter(a);
  };
})(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0;
});
var firebaseConfig = {
  apiKey: "AIzaSyB3KhN4IO-eFSnW0-R5YCrjPY5iA1Xc-Yk",
  authDomain: "proyecto-final-71ed2.firebaseapp.com",
  databaseURL: "https://proyecto-final-71ed2.firebaseio.com",
  projectId: "proyecto-final-71ed2",
  storageBucket: "proyecto-final-71ed2.appspot.com",
  messagingSenderId: "551788436915",
  appId: "1:551788436915:web:ab3dfe2a1ed487953dffc6",
  measurementId: "G-FT6G73QBF7",
};
//// INICIAR FIREBASE Y ANALYTICS /////
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

var arrayDeCategoria1 = [];
var arrayDeCategoria2 = [];
var querySnapshot;
var categoriaseleccionada
const getComidas = () => db.collection("Productos").get();
window.addEventListener("DOMContentLoaded", async (e) => {
  querySnapshot = await getComidas();
  CrearCajasDeProductos();
  FiltrosDeCategoria();


});

function CrearCajasDeProductos() {
  querySnapshot.forEach((doc) => {
    contenedorDeProdutcotos = $("#productos");
    var comida = doc.data().name;
    var precioXUnidad = doc.data().precioXUnidad;
    var precioXDocena = doc.data().precioXDocena;
    var img = doc.data().img;
    texXunidad = `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${img}" alt="img"></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${comida}</a>
        </h4>
        <h5>$${precioXUnidad}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
        </p>
      </div>

    </div>
  </div>
  `;
    contenedorDeProdutcotos.append(texXunidad);
  });
}
function FiltrosDeCategoria() {
  querySnapshot.forEach((doc) => {
    var categoria1 = doc.data().categoria1;
    var categoria2 = doc.data().categoria2;
    arrayDeCategoria1.push(categoria1);
    arrayDeCategoria2.push(categoria2);
  });
  arrayDeCategoria2.unique().forEach((e) => {
    $("#categorias")
      .append(`<p class="list-group-item categoriaselect" data-categoria2="${e}">${e}</p>
    `);
  });
  var catergorias = document.querySelectorAll('.categoriaselect')
  console.log(catergorias);
  
  catergorias.forEach(function (item) {
    item.addEventListener('click', function () {FiltrarCategoria()
      categoriaseleccionada = item.dataset.categoria2})
  })
}


function FiltrarCategoria() {
  console.log(categoriaseleccionada);
      $("#productos").empty()

      querySnapshot.forEach((doc) => {
        contenedorDeProdutcotos = $("#productos");
        var comida = doc.data().name;
        var categoria2 = doc.data().categoria2;
        var precioXUnidad = doc.data().precioXUnidad;
        var precioXDocena = doc.data().precioXDocena;
        var img = doc.data().img;
        var texXunidad = `
        <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="${img}" alt="img"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${comida}</a>
            </h4>
            <h5>$${precioXUnidad}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
            </p>
          </div>
    
        </div>
      </div>
      `;
      if (categoriaseleccionada == categoria2 ){
        contenedorDeProdutcotos.append(texXunidad);
      }
      else if(categoriaseleccionada== 'all' ){
        contenedorDeProdutcotos.append(texXunidad);
      }
      });
}