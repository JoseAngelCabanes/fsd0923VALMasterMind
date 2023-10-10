var n = 4;
var n_colors = 4;
var n_at = 10;

var Itags = document.getElementsByTagName("i");
var Btags = document.getElementsByTagName("b");

var Secrets = document.getElementsByClassName("secret");
var Fon = document.getElementsByClassName("fonc");
var Htag = document.getElementsByTagName("h1");
var Sec = document.getElementsByClassName("secrets");
var Att = document.getElementsByClassName("attempt");
var Butt = document.getElementsByClassName("bcol");
var Bod = document.getElementsByTagName("body");

function rand_till(n) {
  var aa = Math.random();
  var aaa = Math.floor(aa * n);
  if (aaa == n) {
    aaa = 0;
  }
  return Math.floor(aa * n);
}

function FunColor(but) {
  var pressed_color = but.value;
  var colors = [];
  var colors_cod = [];
  var colors_attempt = [];
  var sum1, sum2;
  var x, x_now, attempt_now, at;
  var end_of_attempt = false;
  var color_def;
  color_def = window.getComputedStyle(
    document.getElementsByClassName("fonc")[0]
  ).backgroundColor;

  for (i = 0; i < n_colors; i++) {
    colors[i] = window.getComputedStyle(
      document.getElementsByClassName("bcol")[i]
    ).backgroundColor;
  }

  if (window.getComputedStyle(Secrets[0]).backgroundColor == "rgb(0, 0, 0)") {
    color_def = window.getComputedStyle(Itags[0]).backgroundColor;
    Fon[0].style.backgroundColor = color_def;
    for (i = 0; i < n; i++) {
      colors_cod[i] = colors[rand_till(n_colors)];
      Secrets[i].style.backgroundColor = colors_cod[i];
    }
  }

  j = n;
  at = 1;
  for (i = n_at * n; i > 0; i--) {
    x = i - j;
    j = j - 2;
    if (j == -1 * n) {
      j = n;
      end_of_attempt = true;
    }

    citag = window.getComputedStyle(Itags[x]).backgroundColor;
    if (citag == color_def) {
      x_now = x;
      attempt_now = at;
      break;
    }
    if (j == n) at++;
    end_of_attempt = false;
  }

  var v = 0;
  AttNow = Att[n_at - attempt_now];

  switch (v == 1) {
    case false:
      if (but.value == "PLAY." || but.value == "NICE!") {
        window["location"].sup = 1;
        window["location"].reload(true);
      } else if (but.value == "Cancel") {
        x_now--;
        Itags[x_now].style.backgroundColor = color_def;
        return;
      } else Itags[x_now].style.backgroundColor = colors[pressed_color - 1];
      break;

    case true:
      var style = document.createElement("style");
      style.type = "text/css";
      var h =
        ".attempt i:hover{opacity:0.5; background-color:" +
        colors[pressed_color - 1] +
        "}";
      var hover = document.createTextNode(h);
      var head = document.getElementsByTagName("head")[0];
      style.appendChild(hover);
      head.appendChild(style);

      break;
  }

  if (end_of_attempt) {
    for (i = 0; i < n; i++) {
      colors_cod[i] = window.getComputedStyle(Secrets[i]).backgroundColor;
      colors_attempt[i] = window.getComputedStyle(
        Itags[x_now + i + 1 - n]
      ).backgroundColor;
    }

    sum1 = 0;
    sum2 = 0;

    for (i = 0; i < n; i++) {
      if (colors_cod[i] == colors_attempt[i]) sum1++;
    }

    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (colors_cod[i] == colors_attempt[j]) {
          sum2++;
          colors_attempt[j] = 0;
          break;
        }
      }
    }
    sum2 = sum2 - sum1;

    Bcan = document.getElementsByClassName("b_cansel");

    if (sum1 == n) {
      Bcan[0].value = "NICE!";
      Bcan[0].style.backgroundColor = "#FFC107";
      Bcan[0].style.color = "white";
    }
    if (x_now == n - 1 && sum1 != n) {
      Bcan[0].style.backgroundColor = "#fff";
      Bcan[0].style.color = "black";
      Bcan[0].value = "PLAY.";
      Bcan[0].style.fontSize = "15px";
      Bcan[0].style.fontWeight = "bold";
    }

    if (attempt_now == n_at && sum1 != n) {
      Htag[0].innerHTML = "YOU HAVE LOST, TRY BETTER NEXT TIME!";
      Htag[0].style.color = "white";
      Htag[0].style.fontSize = "18px";
      Sec[0].style.opacity = 1;
    }

    if (sum1 == n) {
      var redirectURL = "../pages/win.html";
      window.location.href = redirectURL;
      Htag[0].classList.add("rai");
      Sec[0].style.opacity = 1;
    }

    for (i = 0; i < n; i++) {
      ii = x_now + i + 1 - n;
      if (sum1 == 0 && sum2 > 0) {
        sum2--;
        Btags[ii].style.backgroundColor = "white";
        Btags[ii].style.borderColor = "white";
      }
      if (sum1 > 0) {
        sum1--;
        Btags[ii].style.backgroundColor = "purple";
        Btags[ii].style.borderColor = "black";
      }
    }
  }
}
