window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("box").style.display = "block";
  } else {
    document.getElementById("box").style.display = "none";
  }
};
