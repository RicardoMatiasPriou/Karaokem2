var firebaseConfig = {
    apiKey: "AIzaSyB3KhN4IO-eFSnW0-R5YCrjPY5iA1Xc-Yk",
    authDomain: "proyecto-final-71ed2.firebaseapp.com",
    databaseURL: "https://proyecto-final-71ed2.firebaseio.com",
    projectId: "proyecto-final-71ed2",
    storageBucket: "proyecto-final-71ed2.appspot.com",
    messagingSenderId: "551788436915",
    appId: "1:551788436915:web:ab3dfe2a1ed487953dffc6",
    measurementId: "G-FT6G73QBF7"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
var comida;
var categoria1;
var categoria2;
var precioXUnidad;
var precioXDocena;
var img;
const getComidas = () => db.collection('Productos').get();
window.addEventListener('DOMContentLoaded', async (e) => {
    querySnapshot = await getComidas();
    querySnapshot.forEach(doc => {
        var contenedorDeProdutcotos = $('#productos')
        var comida = doc.data().name
        var categoria1 = doc.data().categoria1
        var categoria2 = doc.data().categoria2
        var precioXUnidad = doc.data().precioXUnidad
        var precioXDocena = doc.data().precioXDocena
        var img = doc.data().img
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
    contenedorDeProdutcotos.append(texXunidad);
    })
})