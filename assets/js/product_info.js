const accessToken = 'APP_USR-8189733489067517-022609-dbb65fa3af87dc450a542a72ff1f32f1__E_N__-239442426';

$('.enjaja').click((event) => {
  let dataID = $(event.target).data('id');
  getProductInfo(dataID);
});

function getProductInfo(productID) {
  fetch(`https://api.mercadolibre.com/items/${productID}?access_token=${accessToken}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}