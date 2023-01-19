let login = document.querySelector(".login");
let password = document.querySelector(".password");
let e_mail = document.getElementById("input");
let knopka = document.querySelector(".v1");
let errorMsg = document.getElementById("error-msg");

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

knopka.onclick = function () {
  if (e_mail.value.match(mailRegex)) {
    errorMsg.style.display = "none";
    e_mail.style.border = " 2px solid #00ff00";
    alert("You are welcome");
  } else if (e_mail.value === "") {
    errorMsg.style.display = "none";
    e_mail.style.border = " 2px solid #7f7f7f";
  } else {
    errorMsg.style.display = "block";
    e_mail.style.border = " 2px solid #ff2851";
  }
};
// const allWordsFromText = text.match([a-zA-Z0-9.]+)@[a-zA-Z0-9.]\[a-zA-Z0-9.]);

// knopka.onclick = function (e_mail) {
//   const validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (e_mail.value.match(validRegex)) {
//     alert("Valid email address!");

//     document.form1.text1.focus();

//     return true;
//   } else {
//     alert("ошибка введите коррекиные данные");

//     document.form1.text1.focus();

//     return false;
//   }
// };

// knopka.onclick = function () {
//     const validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (e_mail.value === validRegex) {
//     alert("Pleasr enter a task");
//   } else {
//     document.querySelector(".tasks").innerHTML += `
//         <div class= "task" >
//            <span class= "taskName">
//           ошибка
//         </span>
//         </div>`;
//   }
// };

// const factorial = (number) => {
//   if (number === 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// };

// const result = factorial(5);

// console.log(result);
