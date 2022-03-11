const container = document.getElementById('news'),
searchInput = document.getElementById('search'),
title = document.querySelector('.title')

searchInput.addEventListener('input', async e => {
  const value = e.target.value;
  container.style.display = 'none';
  await dataRegion(value);

})

// Scroll Animation 
window.addEventListener("load",  () => {
  document.querySelector('body').classList.add('loaded');  
}); 


const main_load = document.getElementById('load');
main_load.classList.add("hidden");

setTimeout(function () {
  main_load.classList.remove('hidden')
}, 2000)


// Search button to top
document.addEventListener("scroll", function () {
  const scroll_top = document.querySelector('.scroll-top');
  if (this.body.scrollTop > 0 || this.documentElement.scrollTop > 0) {
    scroll_top.classList.remove('hidden');
  } else {
    scroll_top.classList.add('hidden')  
  }
});

// Display all news as default
document.addEventListener('DOMContentLoaded', async () => {
  await allData();
  main_load.classList.add('hidden');
});

// Get All data by fetch
async function allData() {
  let all_card = "";
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
  const respOkezone = await fetch('https://berita-indo-api.vercel.app/v1/okezone-news');
  const dataOkezone = await respOkezone.json();
  const okezonenews = await dataOkezone.data;


  // Source: republika news
  const respRepublika = await fetch('https://berita-indo-api.vercel.app/v1/republika-news/');
  const dataRepublika = await respRepublika.json();
  const republikanews = await dataRepublika.data;

  // Source: tempo news
  const respKumparan = await fetch("https://berita-indo-api.vercel.app/v1/kumparan-news");
  const dataKumparan = await respKumparan.json();
  const kumparannews = await dataKumparan.data;

  // Source: suara new
  const respSuara = await fetch("https://berita-indo-api.vercel.app/v1/suara");
  const dataSuara = await respSuara.json();
  const suaranews = await dataSuara.data;

  // Source: Antara News
  // category: terkini 
  const antaraTerkini = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/terkini")
  const dataAntaraTerkini = await antaraTerkini.json();
  const antaraTerkininews = await dataAntaraTerkini.data;
  // Category: top-news
  const antaraTop =await fetch("https://berita-indo-api.vercel.app/v1/antara-news/top-news");
  const dataAntaraTop = await antaraTop.json();
  const antaraTopnews = await dataAntaraTop.data; 
  // Category: politik
  const antaraPolitik = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/politik");
  const dataAntaraPolitik = await antaraPolitik.json();
  const antaraPolitiknews = await dataAntaraPolitik.data;
  // Category: hukum
  const antaraHukum = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/hukum");
  const dataAntaraHukum = await antaraHukum.json();
  const antaraHukumnews = await dataAntaraHukum.data;
  // Category: ekonomi
  const antaraEkonomi = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/ekonomi");
  const dataAntaraEkonomi = await antaraEkonomi.json();
  const antaraEkonominews = await dataAntaraEkonomi.data;
  // Category: metro
  const antaraMetro = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/metro");
  const dataAntaraMetro = await antaraMetro.json();
  const antaraMetronews = await dataAntaraMetro.data;
  // Category: olahraga
  const antaraOlahraga = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/olahraga");
  const dataAntaraOlahraga = await antaraOlahraga.json();
  const antaraOlahraganews = await dataAntaraOlahraga.data;
  // Category: lifestyle  
  const antaraStyle = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/lifestyle");
  const dataAntaraStyle = await antaraStyle.json();
  const antaraStylenews = await dataAntaraStyle.data;
  // Category: hiburan
  const antaraHiburan = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/hiburan");
  const dataAntaraHiburan = await antaraHiburan.json();
  const antaraHiburannews = await dataAntaraHiburan.data;
  // Category: dunia
  const antaraDunia = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/dunia");
  const dataAntaraDunia = await antaraDunia.json();
  const antaraDunianews = await dataAntaraDunia.data
  // Category: teknologi
  const antaraTekno = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/tekno");
  const dataAntaraTekno = await antaraTekno.json();
  const antaraTeknonews = await dataAntaraTekno.data;
  // Category: otomotif 
  const antaraOtomotif = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/otomotif");
  const dataAntaraOtomotif = await antaraOtomotif.json();
  const antaraOtomotifnews = await dataAntaraOtomotif.data;
  // Category warta-bumi 
  const antaraWarta = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/warta-bumi");
  const dataAntaraWarta = await antaraWarta.json();
  const antaraWartanews = await dataAntaraWarta.data;
  // Category: rilis pers
  const antaraPers = await fetch("https://berita-indo-api.vercel.app/v1/antara-news/rilis-pers");
  const dataAntaraPers = await antaraPers.json();
  const antaraPersnews = await dataAntaraPers.data;

  // Source: Vice news 
  const respVice = await fetch("https://berita-indo-api.vercel.app/v1/vice");
  const dataVice = await respVice.json();
  const vicenews = await dataVice.data;
  
  const antaraNews = [...antaraMetronews, ...antaraEkonominews, ...antaraHukumnews, ...antaraPolitiknews, ...antaraTopnews, ...antaraTerkininews, antaraOlahraganews, ...antaraStylenews, ...antaraHiburannews, ...antaraDunianews, ...antaraTeknonews, ...antaraOtomotifnews, ...antaraWartanews, ...antaraPersnews];

  const all_news = [...news, ...voanews, ...randomnews, ...okezonenews, ...republikanews, ...kumparannews, ...suaranews, ...antaraNews, ...vicenews]; //total: 568 data

  console.log(all_news)

  // loop every data into the card
  okezonenews.forEach(berita => all_card += templateOkezone(berita));
  kumparannews.forEach(berita => all_card += templateKumparan(berita));
  news.forEach(berita => all_card += templateCard(berita));
  voanews.forEach(berita => all_card += templateVoa(berita));
  antaraNews.forEach(berita => all_card += templateAntara(berita));
  randomnews.forEach(berita => all_card += templateRandom(berita));
  republikanews.forEach(berita => all_card += templateVoa(berita));
  suaranews.forEach(berita => all_card += templateSuara(berita));
  vicenews.forEach(berita => all_card += templateVice(berita));
  
  // display card
  container.innerHTML = all_card;
  title.innerHTML =  "Result of all news";
};

let kota = document.getElementById('region_news');
async function dataRegion(region) {
  // All news by region
  let temp_card = '';
  const respAllNews = await fetch('https://berita-indo-api.vercel.app/v1/tribun-news/' + region);
  const dataAllnews= await respAllNews.json();
  const allNews = await dataAllnews.data;

  // Category: business
  const respBisnis = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/bisnis");
  const  dataBisnis = await respBisnis.json();
  const bisnisNews = await dataBisnis.data;

  // Category: sport
  const respSport = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/sport");
  const  dataSport = await respSport.json();
  const sportNews = await dataSport.data;

  // Category: seleb
  const respSeleb = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region  + "/seleb");
  const dataSeleb = await respSeleb.json();
  const selebNews = await dataSeleb.data;

  // Category: lifestyle
  const respStyle = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/lifestyle");
  const dataStyle = await respStyle.json();
  const styleNews = await dataStyle.data;

  // Category: travel 
  const respTravel = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/travel");
  const dataTravel = await respTravel.json();
  const travelNews = await dataTravel.data;

  // Category: otomotif
  const respOtomotif = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/otomotif");
  const dataOtomotif = await respOtomotif.json();
  const ootmotifNews = await dataOtomotif.data;

  // Category: technology
  const respTech = await fetch("https://berita-indo-api.vercel.app/v1/tribun-news/" + region + "/techno");
  const  dataTech = await respTech.json();
  const techNews = await dataTech.data; 

  // merge arrays into one
  const all_category = [...selebNews, ...bisnisNews, ...sportNews, ...styleNews, ...travelNews, ...techNews,...ootmotifNews]; 

  allNews.forEach(berita => temp_card += templateCard(berita));
  all_category.forEach(berita => temp_card += templateCard(berita));

  kota.innerHTML = temp_card;
  title.innerHTML =  dataAllnews.messages;
};





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

function templateOkezone(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.link}">
          <div class="md:flex-shrink-0">

            <img src="${data.image.large}"
              class="object-cover h-full w-full rounded-lg rounded-b-none" alt="tidak ada">
          </div>
        </a>
        
        <div class="py-1">
          <div class="p-4">
            <h2 class=" font-bold mb-2  text-2xl text-gray-800 tracking-normal">${data.title}</h2>
            <p class="break-words text-gray-700  mr-1">${data.content}</p>
          </div>

          <div class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <div class="text-base ">
                <p class="text-black leading-none font-semibold">${data.categories}</p>
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

function templateKumparan(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.link}">
          <div class="md:flex-shrink-0">

            <img src="${data.image.large}"
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
                <p class="text-black leading-none font-semibold">${data.categories}</p>
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

function templateSuara(data) {
  return ` 
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        
        <a target="_blank" rel="noreferrer noopener" href="${data.link}">
          <div class="md:flex-shrink-0">

            <img src="${data.image.large}"
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
                <p class="text-black leading-none font-semibold"></p>
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

function templateAntara(data) {
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
            <p class="break-words text-gray-700  mr-1">${data.description}</p>
          </div>

          <div class="flex items-center justify-between p-4">
            <div class="flex items-center">
              <div class="text-base ">
                <p class="text-black leading-none font-semibold"></p>
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

function templateVice(data) {
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
            <p class="break-words text-gray-700  mr-1">${data.content}</p>
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
const main_refresh = document.querySelector('.refresh-button');
const showRefresh = () => {
  const refreshHTML = `
    <button class="bg-green-500 text-white p-2 rounded shadow-md font-medium refresh mb-10"><i class="fa-solid fa-arrows-rotate  "></i> Refresh</button>
  `
  main_refresh.innerHTML = refreshHTML;

  const refreshBtn = document.querySelector('.refresh')
  refreshBtn.addEventListener('click', () => {
    window.location.reload();
  });
} 

setTimeout(showRefresh, 40000)