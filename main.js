// ==================================================================
// 1. Tugma bosilganda rangni o'zgartirish
// Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o‘zgartirilsin.
// Ko‘rsatma:
// getElementById yoki querySelectorAll yordamida matnni olish.
// Tugma bosilganda rangni o‘zgartirish uchun style.colordan foydalanish.
// Rangni tasodifiy olish uchun Math.random()ni ishlatish.
// const texts = document.querySelectorAll('p')
// const btn = document.getElementById('btn')
// texts.style = 'center'
// function buton() {
//     const Letters = '0123456789abdef'
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         color+= Letters[Math.floor(Math.random() * 16)];
//     }
//     return color
// }
// btn.addEventListener('click', ()=>{
//     texts.forEach((text)=>{
//         text.style.color = buton();
//     })
// })


// ==================================================================
// 2. Inputdagi qiymatni clipboardga nusxalash
// Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda navigator.clipboard.writeText yordamida clipboardga yozib olish.
// Xabar chiqarish uchun DOM element yaratish va qo‘shish.

// const text = document.getElementById('txt')
// const btn = document.getElementById('copybtn')
// btn.addEventListener('click', function(){
    
// })

//==================================================================
// 3. Qidiruv natijasini belgilash
// Vazifa: Sahifada matn yozilgan bo‘lsin. Foydalanuvchi qidiruv maydoniga so‘z kiritadi va "Qidirish" tugmasini bosadi. Sahifada shu so‘z bo‘lsa, uning orqa foni sariq rangga bo‘yaladi.
// Ko‘rsatma:
// querySelector orqali matn va input maydonini olish.
// Tugma bosilganda innerHTML orqali matnni bo‘yalgan elementlarga ajratish (masalan, <span style="background-color: yellow">).
// replace() funksiyasidan foydalanish.

// const text = document.getElementById("text");
// const input = document.getElementById("search"); 
// const btn = document.getElementById("searchbtn"); 
// btn && btn.addEventListener('click', function() {
//     if (text.value) {
//         let  textMessage = message.innerHTML.trim();
//         textMessage = textMessage.replaceAll(text.value, `<span style = "color: blue"></span>`)
//         message.innerHTML = textMessage
//     }
// })



// ==================================================================
{/* 4. Elementni yashirish va ko‘rsatish
Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.
Ko‘rsatma:
querySelectorAll yordamida barcha paragraflarni olish.
style.displayni "none" yoki "block" qilib o‘zgartirish.
Turli tugmalar uchun alohida click hodisalarini ishlatish. */}

// const text = document.querySelectorAll('p')
// const hide = document.getElementById('btn1')
// const show = document.getElementById('btn2')
// hide &&
//   hide.addEventListener("click", function () {
//     text.forEach((value) => {
//       value.style.display = "none";
//     });
//   });
// show && show.addEventListener('click',function(){
//     text.forEach(value=>{
//         value.style.display = "block"; 
//     })
   
// })

// ==================================================================
/* 5. Tugma bosilganda fon rangini o'zgartirish
Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).
Ko‘rsatma:
querySelectorAll orqali barcha tugmalarni olish.
Tugmalarga click hodisasini ulash.
Tugma bosilganda document.body.style.backgroundColor orqali rangni o‘zgartirish. */

// const btns = document.querySelectorAll('button')
//  btns.length && btns.addEventListener('click', function () {
    
//  })


// ==================================================================
/* 6. Belgilangan matnni kattalashtirish
Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.
Ko‘rsatma:
querySelectorAll orqali barcha matnlarni olish.
Har bir elementga click hodisasini ulash.
style.fontSizeni o‘zgartirib, matnni kattalashtirish. */


// const text = document.querySelectorAll('#txt')

//     text.forEach(value=>{
//          value.addEventListener('click', function (){
//             value.style.fontSize = "20px";
//         }) 
//     })



// ==================================================================
/* 7. Ko‘zgu (mirror) effekti
Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.
Ko‘rsatma:
Input maydonini querySelector orqali olish.
input hodisasini ulash.
textContent yoki innerText yordamida inputdagi qiymatni boshqa elementga yozib borish. */
// const input = document.querySelector('input')
// const text  = document.querySelector('h3')

// input && input.addEventListener('input',function(){
//     text.innerHTML = this.value
// })


// ==================================================================
/* 8. Parolni ko‘rsatish/yashirish
Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.
Ko‘rsatma:
querySelector orqali input va tugmani olish.
Tugma bosilganda inputning type xususiyatini text yoki passwordga o‘zgartirish. */
// const hide =document.getElementById('hide')
// const show = document.getElementById("show");
// const input = document.getElementById('input')

// hide && hide.addEventListener('click', function () {
//     input.forEach(value=>{
//         value.style.text.display = "*********"
//     })
// })
// show && show.addEventListener('click', function () {
//     input.forEach(value=>{
//         value.style.text.display = "block"
//     })
// })



// ==================================================================
/* 9. Elementni boshqarish
Vazifa: Sahifada bitta kvadrat shakl bo‘lsin. Foydalanuvchi kvadratni yuqoriga, pastga, chapga yoki o‘ngga ko‘chirish uchun tugmalardan foydalanadi.
Ko‘rsatma:
Kvadratni olish uchun querySelectordan foydalanish.
Har bir yo‘nalish tugmasi uchun click hodisasini ulash.
Kvadratning joylashuvini style.marginLeft, style.marginTop yordamida o‘zgartirish. */
// const square = document.getElementById('square')
// const up = document.getElementById("up");
// const down = document.getElementById("down");
// const left = document.getElementById("left");
// const right = document.getElementById("right");
// let marginrightt = 0;
// let margintopp = 0;
// up.addEventListener("click", () => {
//   margintopp -= 100;
//   square.style.marginTop = margintopp + "px";
// });
// down.addEventListener("click", () => {
//   margintopp += 100;
//   square.style.marginTop = margintopp + "px";
// });
// left.addEventListener("click", () => {
//   marginrightt -= 100;
//   square.style.marginLeft = marginrightt + "px";
// });
// right.addEventListener("click", () => {
//   marginrightt += 100;
//   square.style.marginLeft = marginrightt + "px";
// });



// ==================================================================
/* 10. Tasodifiy rasm ko'rsatish
Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.
Ko‘rsatma:
Rasm URL’larini massivda saqlash.
Math.random yordamida tasodifiy rasmni tanlash.
Rasm elementini yaratish yoki mavjud elementga src o‘zgartirish orqali tasvirni yangilash. */

const img = document.querySelector('#randomimg')
const button = document.querySelector('#btn')
const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/233/200/300",
  "https://picsum.photos/id/230/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/232/200/300",
  "https://picsum.photos/id/234/200/300",
];
button.addEventListener('click',function(){
    let random = Math.floor(Math.random()*images.length)
    img.setAttribute('src',images[random])
})
// ==================================================================
/* 11. Paragraflarni yashirish va ko‘rsatish
Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.
Ko‘rsatma:
querySelectorAll orqali barcha paragraflarni olish.
Har bir paragraf uchun "Yashirish" tugmasi yaratib, ulash.
Tugma bosilganda tegishli paragrafni style.display = "none" qilish. */
// const btn = document.querySelectorAll('#btn')
// btn.forEach(value=>{
//     value.addEventListener('click', ()=> {
//         value.parentElement.style.display = "none"
//     })
// })

// ==================================================================
/* 12. Matnni almashtirish
Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.
Ko‘rsatma:
querySelectorAll orqali barcha paragraflarni olish.
Har biriga click hodisasini ulash.
innerTextni o‘zgartirib, yangi matnni ko‘rsatish. */
// const text = document.querySelectorAll('p')
// text.forEach(value=>{
//     value.addEventListener('click', function () {
//         value.innerText = "Salom, dunyo!";
//     })
// })