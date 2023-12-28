const quotes = [{
    quote: `"Try not to become a man of success, but rather try to become a man of value."`,
    writer: `"-Albert Einstein"`
},{
    quote: `"Success is a lousy teacher. It seduces smart people into thinking they can't lose."`,
    writer: `"-Bill Gates"`
},
{
    quote: `"A true friend is one who overlooks your failures and tolerates your success."`,
    writer: `"-Doug Larson"`
},
{
    quote: `"Ambition is the path to success. Persistence is the vehicle you arrive in."`,
    writer: `"-Bill Bradley"`
},
{
    quote: `"Inspiration does exist, but it must find you working."`,
    writer: `"-Pablo Picasso"`
},
{
    quote: `"Success is where preparation and opportunity meet."`,
    writer: `"-Bobby Unser"`
},
{
    quote: `"Happiness lies in the joy of achievement and the thrill of creative effort."`,
    writer: `"-Franklin D. Roosevelt"`
},
{
    quote: `"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence."`,
    writer: `"-Colin Powell"`
},
{
    quote: `"Coming together is a beginning; keeping together is progress; working together is success."`,
    writer: `"-Henry Ford"`
},
{
    quote: `"Self-belief and hard work will always earn you success."`,
    writer: `"-Virat Kohli"`
},
{
    quote: `"Survival was my only hope, success my only revenge."`,
    writer: `"-Patricia Cornwell"`
},
{
    quote: `"Success consists of going from failure to failure without loss of enthusiasm."`,
    writer: `"-Winston Churchill"`
},
{
    quote: `"The secret of your success is determined by your daily agenda."`,
    writer: `"-John C. Maxwell"`
},
{
    quote: `"However difficult life may seem, there is always something you can do and succeed at."`,
    writer: `"-Stephen Hawking"`
},
{
    quote: `"Your positive action combined with positive thinking results in success."`,
    writer: `"-Shiv Khera"`
},
{
    quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    writer: `"-Winston Churchill"`
},
{
    quote: `"Patience, persistence and perspiration make an unbeatable combination for success."`,
    writer: `"-Napoleon Hill"`
},
{
    quote: `"Some people dream of success, while other people get up every morning and make it happen."`,
    writer: `"-Wayne Huizenga"`
},
{
    quote: `"Put your heart, mind, and soul into even your smallest acts. This is the secret of success."`,
    writer: `"-Swami Sivananda"`
},]

let btn = document.querySelector('#Qbtn');
let quote = document.querySelector('.quote');
let writer = document.querySelector('.writer');

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})