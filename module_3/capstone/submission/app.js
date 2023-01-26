$("#alert-is-successful").hide();
$("#alert-is-unsuccessful").hide();
fetch("https://www.colr.org/json/schemes/random/30?scheme_size_limit=>4")
  .then((res) => res.json())
  .then((data) => {
    const mainContainer = $("#main-container");
    if (data.success) {
      data.schemes.map((obj) => {
        mainContainer.append(createCard(obj.colors));
        console.log(obj.colors);
        $("#alert-is-successful").show();
        setTimeout(function () {
          $("#alert-is-successful").fadeOut();
        }, 2000);
      });
    }
  })
  .catch((err) => {
    $("#alert-is-unsuccessful").show();
    setTimeout(function () {
      $("#alert-is-unsuccessful").fadeOut();
    }, 2000);
  });

function createCard(colorArr) {
  return `
    <div class="card-container">
    <div class="color-1" style="background: #${colorArr[0]}">
    <p class="backg-color">${colorArr[0]}</p>
    </div>
    <div class="color-2" style="background: #${colorArr[1]}">    
    <p class="backg-color">${colorArr[1]}</p>
    </div>
    <div class="color-3" style="background: #${colorArr[2]}">    
    <p class="backg-color">${colorArr[2]}</p>
    </div>
    <div class="color-4" style="background: #${colorArr[3]}">    
    <p class="backg-color">${colorArr[3]}</p>
    </div>
    </div>       
    `;
}
