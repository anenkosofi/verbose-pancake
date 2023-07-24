const BASE_URL = 'https://64be73b75ee688b6250c6d71.mockapi.io';

const filters = document.querySelector('.service__filters-list');
const serviceList = document.querySelector('.service__list');

filters.addEventListener('click', filterHandler);

showStartDesignIdeas();

function filterHandler(e) {
  const filter = e.target.closest('li');
  if (!filter) {
    return;
  } else if (filter) {
    if (!filter.classList.contains('service__filters-item_active')) {
      Array.from(filters.children).forEach(item =>
        item.classList.remove('service__filters-item_active')
      );
      const category = filter.dataset.id.toLowerCase();
      filter.classList.add('service__filters-item_active');
      if (category !== 'all') {
        getDesignIdeasByCategory(category)
          .then(ideas => showDesignIdeas(ideas))
          .catch(error => console.log(error));
      } else {
        getDesignIdeas()
          .then(ideas => {
            const lastItems = getLastItemsOfEachCategory(ideas);

            showDesignIdeas(lastItems);
          })
          .catch(error => console.log(error));
      }
    } else if (filter.classList.contains('service__filters-item_active')) {
      Array.from(filters.children).forEach(item =>
        item.classList.remove('service__filters-item_active')
      );

      getDesignIdeas()
        .then(ideas => {
          filter.classList.remove('service__filters-item_active');
          filters.children[0].classList.add('service__filters-item_active');
          const lastItems = getLastItemsOfEachCategory(ideas);

          showDesignIdeas(lastItems);
        })
        .catch(error => console.log(error));
    }
  }
}

function showStartDesignIdeas() {
  getDesignIdeas()
    .then(ideas => {
      getCategories(ideas);
      const lastItems = getLastItemsOfEachCategory(ideas);

      showDesignIdeas(lastItems);
    })
    .catch(error => console.log(error));
}

function getDesignIdeas() {
  const url = `${BASE_URL}/design`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function getDesignIdeasByCategory(category) {
  const url = `${BASE_URL}/design?category=${category}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function getCategories(ideas) {
  const categories = [...new Set(ideas.map(({ category }) => category))];
  const markup = categories
    .map(
      category =>
        `<li class="service__filters-item" data-id="${category}">
          ${category}
        </li>`
    )
    .join('');
  filters.insertAdjacentHTML('beforeend', markup);
}

function getLastItemsOfEachCategory(ideas) {
  const categoriesMap = new Map();

  for (const project of ideas) {
    categoriesMap.set(project.category, project);
  }

  const lastItemsArray = Array.from(categoriesMap.values());
  return lastItemsArray;
}

function showDesignIdeas(ideas) {
  const markup = ideas
    .map(
      ({ title, description }) =>
        `<li class="service__item">
        <div class="service__content">
          <h3 class="service__post-heading">${title}</h3>
          <p class="service__description">
            ${description}
          </p>
        </div>
      </li>`
    )
    .join('');
  serviceList.innerHTML = markup;
}
