// Template Card News
export function templateCard(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateVoa(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateRandom(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateOkezone(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateKumparan(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateSuara(data) {
  return ` 
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateAntara(data) {
  return ` 
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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

export function templateVice(data) {
  return `
    <div class="mx-auto px-4 py-4 max-w-xl my-auto">
      <div class="bg-gray-50 md:bg-white shadow-xl rounded-lg mb-6 ">
        
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