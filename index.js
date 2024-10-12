// first task 👇
// function startWithUpperCase(str){
//     return /^[A-Z]/.test(str);
// }
// console.log(startWithUpperCase("hello world"));
// console.log(startWithUpperCase("Hello world"));



// second task 👇
// function isDateValid(date){
//     return /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(date)
// }
// console.log(isDateValid("19/11/2023"));
// console.log(isDateValid("01/01/2024"));



// third task 👇
// function isNumValid(nums){
//     return /^5\d{2}-\d{2}-\d{2}-\d{2}$/.test(nums)
// }
// console.log(isNumValid("598-12-34-56"));
// console.log(isNumValid("598-12-34"));
// console.log(isNumValid("598-12-34-567"));
// console.log(isNumValid("498-12-34-56"));



// fourth task 👇
// function isEmailValid(str){
//     return /^[a-zA-Z][\.a-zA-Z0-9]*@[a-z]+\.[c][o][m]$/.test(str)
// }
// console.log(isEmailValid("giorgi.nadiradze123@gmail.com"));
// console.log(isEmailValid("giorgi.nadiradze@123gmail.com"));
// console.log(isEmailValid("giorgi.nadiradze@mail.ge"));
// console.log(isEmailValid("giorgi.nadiradzegmail.com"));



// fifth task 👇
// const horoscopes = [
//     "today you will win jackpot",
//     "today you get surprise",
//     "stay positive and keep calm",
//     "wait for financial growth ",
//     "today will be your lucky day",
//     "stay today at home",
//     "you will achieve lots at work",
//     "apologise to people",
//     "Make a wish ",
//     "relax and have fun",
// ];
// localStorage.setItem("horoscopes", JSON.stringify(horoscopes))
// const savedHoroscope = JSON.parse(localStorage.getItem("horoscopes"))
// const time = new Date().getDate() % 10;
// document.getElementById("horoscope").innerText = savedHoroscope[time]



// sixth task 👇 
// const form = document.getElementById('info')
// function saveToLocal(){
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;

//     localStorage.setItem('name',name)
//     localStorage.setItem('email',email)
//     localStorage.setItem('phone',phone)
// }
// document.getElementById('name').value = localStorage.getItem('name')
// document.getElementById('email').value = localStorage.getItem('email')
// document.getElementById('phone').value = localStorage.getItem('phone')

// document.getElementById('userForm').addEventListener('input', saveToLocal)



// task seven 👇
// const texts = {
//     en: "Hello! This is a text written in English.",
//     ka: "გამარჯობა! ეს არის ქართული ტექსტი."
// }

// function changetext(lang){
//     const randomTextElement = document.getElementById("randomtext")
//     randomTextElement.innerText = texts[lang]
//     localStorage.setItem("selectedlang",lang)
// }
// const btn = document.getElementById('enbtn')
// const btn2 = document.getElementById('kabtn')
// btn.addEventListener('click', () =>{
//     changetext('en')
// })
// btn2.addEventListener('click', ()=>{
//     changetext('ka')
// });

// function loadLanguage(){
//     const saved = localStorage.getItem("selectedlang")|| 'en';
//     changetext(saved)
// }
// loadLanguage()


