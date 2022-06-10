const body = document.body;

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
const init = () => {
  const ranNum = Math.floor(Math.random() * images.length);
  body.style.backgroundImage = `url(${images[ranNum].url})`;
};

init();
