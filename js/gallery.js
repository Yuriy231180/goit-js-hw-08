const galleryElement = document.querySelector(".gallery");

window.instance = "";

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Рендер галереи
function renderGalleryElement(element_object, galleryElement) {
  let _template = `
<li class="gallery-item">
    <img
      class="gallery-image"
      src="${element_object.preview}"
      data-source="${element_object.original}"
      alt="${element_object.description}"
    />
</li>`;

  galleryElement.insertAdjacentHTML("beforeend", _template);
}

function closeModalFromEscape(key) {
  if (key.key == "Escape") {
    // Закрываем модалку
    window.instance.close();
  }
}

// Рендерим галерею
images.forEach((image) => {
  renderGalleryElement(image, galleryElement);
  //   console.log(galleryElement);
});

// Event Handler
document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("click", (e) => {
    let _attr = e.currentTarget.getAttribute("data-source"); // HTMLElement

    // Создаём модалку с картинкой
    window.instance = basicLightbox.create(
      `<img width="1400" height="900" src="${_attr}">`,
      {
        onClose: () => {
          document.removeEventListener("keyup", closeModalFromEscape);
        },
      }
    );

    // Тут показываем модалку
    window.instance.show();

    // Прослушиваем кнопку
    document.addEventListener("keyup", closeModalFromEscape);
  });
});
