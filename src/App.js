const container = document.getElementById('news'),
searchInput = document.getElementById('search'),
title = document.querySelector('.title')


searchInput.addEventListener('input', async e => {
  const value = e.target.value;
  container.style.display = 'none';
  await dataRegion(value);
})


let kota = document.getElementById('region_news');
let temp_card = '';


async function dataRegion(region) {
  const resp = await fetch('https://berita-indo-api.vercel.app/v1/tribun-news/' + region );
  const respData= await resp.json();
  const news = await respData.data;
  let region_card = '';
  news.forEach(berita => region_card += templateCard(berita));
  kota.innerHTML = region_card;
  title.innerHTML =  respData.messages;

  await otomotif(region);
  await travel(region);
  await lifestyle(region);
  await seleb(region);
  await sport(region);
  // Tecnology news
  await techno(region);
  await business(region);
};

// business category 
const business = async area => {
  const respBisnis = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/bisnis");
  const  dataBisnis = await respBisnis.json();
  const bisnisNews = await dataBisnis.data;
  console.log(bisnisNews);
  bisnisNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

// sport category 
const sport = async area => {
  const respSport = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/sport");
  const  dataSport = await respSport.json();
  const sportNews = await dataSport.data;
  console.log(sportNews);
  sportNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

const seleb = async area => {
  const respSeleb = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/seleb");
  const dataSeleb = await respSeleb.json();
  const selebNews = await dataSeleb.data;
  console.log(selebNews);
  selebNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

const lifestyle = async area => {
  const respStyle = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/lifestyle");
  const dataStyle = await respStyle.json();
  const styleNews = await dataStyle.data;
  console.log(styleNews);
  styleNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

const travel = async area => {
  const respTravel = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/travel");
  const dataTravel = await respTravel.json();
  const travelNews = await dataTravel.data;
  console.log(travelNews);
  travelNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

const otomotif = async area => {
  const respOtomotif = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/otomotif");
  const dataOtomotif = await respOtomotif.json();
  const ootmotifNews = await dataOtomotif.data;
  console.log(ootmotifNews);
  ootmotifNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};

// get data about techno according to region
async function techno(area) {
  const respTech = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + area + "/techno");
  const  dataTech = await respTech.json();
  const techNews = await dataTech.data;
  console.log(techNews);
  techNews.forEach(n => temp_card += templateCard(n));
  kota.innerHTML += temp_card;
};


let all_card = "";
// Get All data by fetch
async function allData() {
  // Source: tribbun news
  const resp = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news");
  const respData = await resp.json();
  const news = await respData.data;

  // Source: voa news
  const respVoa = await fetch('https://berita-indo-api.vercel.app/v1/voa');
  const dataVoa = await respVoa.json();
  const voanews = await dataVoa.data;

  const respRandom = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=49b7b991a17a485dbbc5e838e1271a4d');
  const dataRandom = await respRandom.json();
  const randomnews = await dataRandom.articles;

  // Source: Okezone news

  // All news
  const all_news = [...news, ...voanews, ...randomnews]; 
  console.log(all_news)
  news.forEach(berita => all_card += templateCard(berita));
  voanews.forEach(berita => all_card += templateVoa(berita));
  randomnews.forEach(berita => all_card += templateRandom(berita));
  container.innerHTML = all_card;
  title.innerHTML =  respData.messages;
};


// Display all news as default
document.addEventListener('DOMContentLoaded', async () => {
  await allData();
});


// Template Card News
function templateCard(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.link}">
          <div class="md:flex-shrink-0">

            <img src="${data.image}"
              class="object-cover h-full w-full rounded-lg rounded-b-none" alt="tidak ada">
          </div>
        </a>
        
        <div class="py-1">
          <div class="p-4">
            <h2 class=" font-bold mb-2  text-2xl text-gray-800 tracking-normal">${data.title}</h2>
            <p class="break-words text-gray-700  mr-1">${data.contentSnippet}</p>
          </div>

          <div class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <div class="text-base ">
                <p class="text-gray-700">${data.isoDate}</p>
              </div>
            </div>
            <a target="_blank" rel="noreferrer noopener" href="${data.link}"
              class="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

function templateVoa(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.link}">
          <div class="md:flex-shrink-0">

            <img src="${data.image.small}"
              class="object-cover h-full w-full rounded-lg rounded-b-none" alt="tidak ada">
          </div>
        </a>
        
        <div class="py-1">
          <div class="p-4">
            <h2 class=" font-bold mb-2  text-2xl text-gray-800 tracking-normal">${data.title}</h2>
            <p class="break-words text-gray-700  mr-1">${data.description}</p>
          </div>

          <div class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <div class="text-base ">
                <p class="text-gray-700">${data.isoDate}</p>
              </div>
            </div>
            <a target="_blank" rel="noreferrer noopener" href="${data.link}"
              class="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  `
};

function templateRandom(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.url}">
          <div class="md:flex-shrink-0">

            <img src="${data.urlToImage}"
              class="object-cover h-full w-full rounded-lg rounded-b-none" alt="tidak ada">
          </div>
        </a>
        
        <div class="py-1">
          <div class="p-4">
            <h2 class=" font-bold mb-2  text-2xl text-gray-800 tracking-normal">${data.title}</h2>
            <p class="break-words text-gray-700  mr-1">${data.description}</p>
          </div>

          <div class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <div class="text-base ">
                <p class="text-gray-700">${data.publishedAt}</p>
              </div>
            </div>
            <a target="_blank" rel="noreferrer noopener" href="${data.url}"
              class="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

// Fixed Top, Progress bar
let h=document.documentElement,
b=document.body,
st="scrollTop",
sh="scrollHeight",
progress=document.querySelector("#progress"),
scroll;
let scrollpos=window.scrollY;
let header=document.getElementById("header");
let navcontent=document.getElementById("nav-content");
document.addEventListener("scroll", function() {
    scroll=(h[st]||b[st])/((h[sh]||b[sh])-h.clientHeight)*100;
    progress.style.setProperty("--scroll", scroll+"%");
    scrollpos=window.scrollY;
    if(scrollpos>10) {
        header.classList.add("bg-white");
        header.classList.add("shadow-xl");
        navcontent.classList.remove("bg-gray-50");
        navcontent.classList.add("bg-white")
    }
    else {
        header.classList.remove("bg-white");
        header.classList.remove("shadow-xl");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-50")
    }
}
);



// api key : 49b7b991a17a485dbbc5e838e1271a4d