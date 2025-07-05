// variables for verifying information
const submit = document.getElementById("button");
const check = document.querySelector(".information-check");
const info = document.querySelector(".info");
const again = document.querySelector(".nhap-lai");
const verify = document.querySelector(".xac-thuc");

// prevent reloading
const stopReload = function (event) {
  event.preventDefault();
};
submit.addEventListener("click", stopReload);

// Check email
submit.addEventListener("click", function () {
  const email = document.getElementById("check-input").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email)) {
    check.classList.add("hidden");
    info.classList.remove("hidden");
  } else {
    verify.classList.add("hidden");
    again.classList.remove("hidden");
  }
});

// variables for conceal job information
// Exp
const viewMore1 = document.querySelector(".my-button-1");
const exp = document.querySelector(".content-ji-exp");

// Processing
let counter1 = -1;
viewMore1.addEventListener("click", function () {
  counter1++;
  if (counter1 % 2 === 0) {
    exp.classList.remove("hidden");
    viewMore1.innerText = "▼ View Less";
  } else {
    exp.classList.add("hidden");
    viewMore1.innerText = "▼ View More";
  }
});

// Hob
const viewMore2 = document.querySelector(".my-button-2");
const hob = document.querySelector(".content-ji-hob");

// Processing
let counter2 = -1;
viewMore2.addEventListener("click", function () {
  counter2++;
  if (counter2 % 2 === 0) {
    hob.classList.remove("hidden");
    viewMore2.innerText = "▼ View Less";
  } else {
    hob.classList.add("hidden");
    viewMore2.innerText = "▼ View More";
  }
});

// Aca
const viewMore3 = document.querySelector(".my-button-3");
const aca = document.querySelector(".content-ji-aca");

// Processing
let counter3 = -1;
viewMore3.addEventListener("click", function () {
  counter3++;
  if (counter3 % 2 === 0) {
    aca.classList.remove("hidden");
    viewMore3.innerText = "▼ View Less";
  } else {
    aca.classList.add("hidden");
    viewMore3.innerText = "▼ View More";
  }
});

// Lang
const viewMore4 = document.querySelector(".my-button-4");
const lang = document.querySelector(".content-ji-lang");

// Processing
let counter4 = -1;
viewMore4.addEventListener("click", function () {
  counter4++;
  if (counter4 % 2 === 0) {
    lang.classList.remove("hidden");
    viewMore4.innerText = "▼ View Less";
  } else {
    lang.classList.add("hidden");
    viewMore4.innerText = "▼ View More";
  }
});

// Act
const viewMore5 = document.querySelector(".my-button-5");
const act = document.querySelector(".content-ji-act");

// Processing
let counter5 = -1;
viewMore5.addEventListener("click", function () {
  counter5++;
  if (counter5 % 2 === 0) {
    act.classList.remove("hidden");
    viewMore5.innerText = "▼ View Less";
  } else {
    act.classList.add("hidden");
    viewMore5.innerText = "▼ View More";
  }
});

// skill
const viewMore6 = document.querySelector(".my-button-6");
const skill = document.querySelector(".content-ji-skill");

// Processing
let counter6 = -1;
viewMore6.addEventListener("click", function () {
  counter6++;
  if (counter6 % 2 === 0) {
    skill.classList.remove("hidden");
    viewMore6.innerText = "▼ View Less";
  } else {
    skill.classList.add("hidden");
    viewMore6.innerText = "▼ View More";
  }
});
