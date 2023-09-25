(function() {
  function $(id) {
      return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null,
      cakeImage = $('cake-image'); // Ambil elemen gambar dengan id cake-image

      openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
        setTimeout(function () {
          cakeImage.style.display = 'block'; // Tampilkan gambar setelah penundaan
      }, 980);// Tampilkan gambar saat tombol "Open" ditekan
      }, 1000);

  });

  closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      cakeImage.style.display = 'none'; // Sembunyikan gambar setelah penundaan
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
          card.setAttribute('class', '');// Sembunyikan gambar saat tombol "Close" ditekan
          timer = null;
      }, 1000);
  });

})();
