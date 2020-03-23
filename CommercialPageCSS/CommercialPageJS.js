/*nav bar fade effect & hide effect*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){fadeFunc()};
function fadeFunc(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("navBar").className = "test1";
  }else{
    document.getElementById("navBar").className = "test";
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.visibility = "visible";
    document.getElementById("navBar").style.opacity = "1";
  } else {
    document.getElementById("navBar").style.visibility = "hidden";
    document.getElementById("navBar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

function category(id) {
  if (id === 1) {
    document.getElementById("categoryName").innerText = "Clothing & Fabrics";
    document.getElementById("product1").style.backgroundImage = "url('cusion-cover.jpg')";
    document.getElementById("product1-name").innerText = "CUSHION COVER";
    document.getElementById("product1-price").innerText = "$ 8";
    document.getElementById("product1-model").src = "cusion-cover.jpg";

    document.getElementById("product2").style.backgroundImage = "url('hand-loom-box-purse.jpg')";
    document.getElementById("product2-name").innerText = "HAND LOOM\nBOX PURSE";
    document.getElementById("product2-price").innerText = "$ 5";

    document.getElementById("product3").style.backgroundImage = "url('hand-loom-owl.jpg')";
    document.getElementById("product3-name").innerText = "HAND LOOM\nOWL";
    document.getElementById("product3-price").innerText = "$ 5";

    document.getElementById("product4").style.backgroundImage = "url('hand-loom-starfish.jpg')";
    document.getElementById("product4-name").innerText = "HAND LOOM\nSTARFISH";
    document.getElementById("product4-price").innerText = "$ 6";

    document.getElementById("product5").style.backgroundImage = "url('hand-loom-purse.jpg')";
    document.getElementById("product5-name").innerText = "HAND LOOM\nPURSE";
    document.getElementById("product5-price").innerText = "$ 6";
  } else if (id === 2) {
    document.getElementById("categoryName").innerText = "Art & Crafts";

    document.getElementById("product1").style.backgroundImage = "url('granite-statue.jpg')";
    document.getElementById("product1-name").innerText = "GRANITE STATUE";
    document.getElementById("product1-price").innerText = "$ 398";

    document.getElementById("product2").style.backgroundImage = "url('kolam-mask.jpg')";
    document.getElementById("product2-name").innerText = "KOLAM MASK";
    document.getElementById("product2-price").innerText = "$ 34";

    document.getElementById("product3").style.backgroundImage = "url('laquared-cakebox.jpg')";
    document.getElementById("product3-name").innerText = "LAQUARED BOX";
    document.getElementById("product3-price").innerText = "$ 9";

    document.getElementById("product4").style.backgroundImage = "url('pulp-elephant.jpg')";
    document.getElementById("product4-name").innerText = "PULP ELEPHANT";
    document.getElementById("product4-price").innerText = "$ 82";

    document.getElementById("product5").style.backgroundImage = "url('wooden-elephant.jpg')";
    document.getElementById("product5-name").innerText = "WOODEN ELEPHANT";
    document.getElementById("product5-price").innerText = "$ 10";
  } else if (id === 3) {
    document.getElementById("categoryName").innerText = "Leather & Ceramic";

    document.getElementById("product1").style.backgroundImage = "url('ceramic-elephant.jpg')";
    document.getElementById("product1-name").innerText = "CERAMIC ELEPHANT";
    document.getElementById("product1-price").innerText = "$ 12";

    document.getElementById("product2").style.backgroundImage = "url('ceramic-pen-holder.jpg')";
    document.getElementById("product2-name").innerText = "CERAMIC PENHOLDER";
    document.getElementById("product2-price").innerText = "$ 10";

    document.getElementById("product3").style.backgroundImage = "url('leather-humpty-oval.jpg')";
    document.getElementById("product3-name").innerText = "HUMPTY OVAL";
    document.getElementById("product3-price").innerText = "$ 70";

    document.getElementById("product4").style.backgroundImage = "url('leather-side-bag.jpg')";
    document.getElementById("product4-name").innerText = "LEATHER\nSIDE BAG";
    document.getElementById("product4-price").innerText = "$ 30";

    document.getElementById("product5").style.backgroundImage = "url('leather-travelling-bag.jpg')";
    document.getElementById("product5-name").innerText = "LEATHER\nTRAVELLING BAG";
    document.getElementById("product5-price").innerText = "$ 50";

  } else if (id === 4) {
    document.getElementById("categoryName").innerText = "Gem & Jewellery";

    document.getElementById("product1").style.backgroundImage = "url('blue-topaz.jpg')";
    document.getElementById("product1-name").innerText = "BLUE TOPAZ";
    document.getElementById("product1-price").innerText = "$ 850";

    document.getElementById("product2").style.backgroundImage = "url('lemon-quartz.jpg')";
    document.getElementById("product2-name").innerText = "LEMON QUARTZ";
    document.getElementById("product2-price").innerText = "$ 240";

    document.getElementById("product3").style.backgroundImage = "url('silver-necklace-2.jpg')";
    document.getElementById("product3-name").innerText = "SILVER NECKLACE";
    document.getElementById("product3-price").innerText = "$ 2000";

    document.getElementById("product4").style.backgroundImage = "url('silver-necklace-1.jpg')";
    document.getElementById("product4-name").innerText = "SILVER NECKLACE";
    document.getElementById("product4-price").innerText = "$ 8400";

    document.getElementById("product5").style.backgroundImage = "url('silver-necklace-3.jpg')";
    document.getElementById("product5-name").innerText = "SILVER NECKLACE";
    document.getElementById("product5-price").innerText = "$ 1700";

  } else {
    document.getElementById("categoryName").innerText = "Tea & Spices";

    document.getElementById("product1").style.backgroundImage = "url('black-pepper.jpg')";
    document.getElementById("product1-name").innerText = "BLACK PEPPER";
    document.getElementById("product1-price").innerText = "$ 10";

    document.getElementById("product2").style.backgroundImage = "url('ceylon-tea.jpg')";
    document.getElementById("product2-name").innerText = "CEYLON TEA";
    document.getElementById("product2-price").innerText = "$ 60";

    document.getElementById("product3").style.backgroundImage = "url('cinnamon-pack.jpg')";
    document.getElementById("product3-name").innerText = "CINNAMON PACK";
    document.getElementById("product3-price").innerText = "$ 75";

    document.getElementById("product4").style.backgroundImage = "url('coriander-seeds.jpg')";
    document.getElementById("product4-name").innerText = "CORIANDER SEEDS";
    document.getElementById("product4-price").innerText = "$ 5";

    document.getElementById("product5").style.backgroundImage = "url('spices-pack.jpg')";
    document.getElementById("product5-name").innerText = "SPICES PACK";
    document.getElementById("product5-price").innerText = "$ 15";

  }
}

  function confirmation() {
    var name = document.getElementById("myForm").elements[0].value;
    var address = document.getElementById("myForm").elements[1].value;
    var email = document.getElementById("myForm").elements[2].value;
    var tel = document.getElementById("myForm").elements[3].value;

    var c = confirm(name+" Thank you for shopping with us. Your ddetails are "+address+"\n"+email+"\n"+tel);

    if (c === true){
      document.getElementById("id01").style.display = "none";
      document.getElementById("myModel").style.display = "none";
    }
  }



