document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleForSubmit = (event) => {
    event.preventDefault();
 
    const title = document.createElement('h1');
    title.textContent = `${event.target.title.value}`;

    const author = document.createElement('h2');
    author.textContent = `${event.target.author.value}`;

    const category = document.createElement('p');
    category.textContent = `${event.target.category.value}`;


    const newBook = document.createElement('ul');
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(category);

    const list = document.querySelector('#reading-list');
    list.appendChild(newBook);

    form.reset();

  }

  const handleForDelete = (event) => {
    event.preventDefault();
    const list = document.querySelector('ul');
    list.innerHTML = '';
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForSubmit);

  const remove = document.querySelector('#delete');
  remove.addEventListener('submit', handleForDelete);

})
