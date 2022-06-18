const images = [
  {
    index: 1,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/1.webp",
  },
  {
    index: 2,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/2.webp",
  },
  {
    index: 3,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/3.webp",
  },
  {
    index: 4,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/4.webp",
  },
];

const clock = document.querySelector(".clock");

const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

clock.innerText = `${hour}:${minutes}`;

const container = document.querySelector(".container");

const randomNum = Math.floor(Math.random() * images.length);

container.style.backgroundImage = `url(${images[randomNum].url})`;
