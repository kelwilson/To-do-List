import './style.css';

const toDoData = [
  {
    description: 'pray!!',
    completed: false,
    index: 1,
  },
  {
    description: 'study',
    completed: true,
    index: 2,
  },
  {
    description: 'do some more research on programming',
    completed: false,
    index: 3,
  },
  {
    description: 'go to the gym',
    completed: false,
    index: 4,
  },
  {
    description: 'listen to music',
    completed: false,
    index: 5,
  },
];

const data = () => {
  const content = document.querySelector('.lists');
  for (let i = 0; i < toDoData.length; i += 1) {
    const todo = document.createElement('li');
    todo.classList.add('list-info');
    todo.innerHTML = `
         <div class="check">
    <input type="checkbox">
    <h2>${toDoData[i].description}</h2>
    </div>
    <div class="icon">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
      `;
    content.appendChild(todo);
  }
};

data();