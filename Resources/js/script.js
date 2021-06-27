function hidText()
{
    var nS=document.getElementById('nav-button').getAttribute("aria-expanded");
    var hT=document.getElementById('headerText');
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    if(nS=='false')
    {
        hT.style.width="90%";
        hT.style.left="10%";
        hT.style.top="40vh";
    }
    else
    {
      if(vh<520)
      {
        hT.style.width="70%";
        hT.style.left="30%";
        hT.style.top="40vh";
      }
      else
      {
        hT.style.top="70vh";
        hT.style.left="10%";
        hT.style.width="90%";
      }
    }
}

window.onscroll = function() {mySticky()};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo= document.getElementById("logo");
// Get the offset position of the navbar
var sticky = 250;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("bg-bluet");
    navbar.classList.remove("bg-transparent");
    logo.style.height="50px";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-bluet");
    logo.style.height="75px";
  }
}

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 1000,
            values: [190, 728],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                var mi = ui.values[0];
                var mx = ui.values[1];
                filterSystem(mi, mx);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });
