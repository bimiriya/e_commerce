const accessToken = 'APP_USR-8189733489067517-022616-f503fa00109170e4073113e15b23d6e4__G_A__-239442426';

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
      console.log(data)
      fillTemplate(data);
      $('#productModal').modal();
    });
}

function fillTemplate(data) {
  const rawTemplate = document.getElementById('product-template').innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let generatedHTML = compiledTemplate(data);

  const app = document.getElementById('here');
  app.innerHTML = generatedHTML;
}

/*
function fillTemplate(data) {
  const quoteInfo = document.getElementById('quote-template').innerHTML;
      const template = Handlebars.compile(quoteInfo);
      let quoteData = template({
        cat: [
          {cater: data.title}
        ]
      })
}

document.getElementById('aparece').innerHTML += quoteData;
*/