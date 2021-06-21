$("button").html("<em>do not click me</em>");

$("a").attr(
  "href",
  "https://login.yahoo.com/?.src=ym&lang=ro-RO&done=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAAH-J20LVZnhV0182QX9nLwSe_Pk2tb-M32lrhoGmv0H0LS6xVbhuEAwc9Q6nYsQvXLRAArYOikJxapN_7VNgMVnm9MFNF2YzNTkbureGTPSf-nq9CjXGprtnldkU6eAciSelKMW5GBDbvH8e5WfaMiolk1drmjhSieGlQqBVE_sc"
);

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "blue";
//   });
// }

$("button").click(function () {
  $("h1").css("color", "blue");
});

$("input").keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});
