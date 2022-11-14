$(document).ready(function () {

  $("button").click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
      .done(function (dane) {

        let divDane = document.createElement('div');
        divDane.id = "dane-programisty"
        divDane.innerText = `Dane programisty
        
         Imię: ${dane.imie}, 
         Nazwisko: ${dane.nazwisko}, 
         Zawód: ${dane.zawod}, 
         Firma: ${dane.firma}`;
        document.body.appendChild(divDane);

      })
      .fail(function (error) {
        console.error(error);
      })
  });
});


