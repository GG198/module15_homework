const btn = document.querySelector('.btn');
const chart = document.querySelector('.chart');

btn.addEventListener('click', () => {
  chart.innerHTML = `
  <h1>Рисуем флаги c Помощью js</h1>
  <h2>Россия</h2>
  <div>
      <svg width="180" height="120">
          <rect  width="180" height="40" y="0" fill="#fff" stroke="#fff"></rect>
          <rect  width="180" height="40" y="40" fill="#d52b1e" stroke="#d52b1e"></rect>
          <rect  width="180" height="40" y="80" fill="#0039a6" stroke="#0039a6"></rect>
      </svg>
  </div>
      <h2>Франция</h2>
      <div>
           <svg width="180" height="120">
              <rect width="180" height="100" fill="#ED2939"></rect>
              <rect width="120" height="100" fill="#fff"></rect>
              <rect width="50" height="100" fill="#002395"></rect>
          </svg>
      </div>
      <h2>Финляндия</h2>
      <div>
          <svg width="180" height="120">
              <rect width="180" height="120" fill="#fff"/>
              <rect width="180" height="30" y="40" fill="#003580"/>
              <rect width="30" height="120" x="50" fill="#003580"/>
          </svg>
      </div>
      <h2>Швейцария</h2>
      <div>
          <svg width="180" height="120">
              <rect width= "180" height="120" fill="#d81e05"></rect>
              <rect width= "30" height="80" x="80" y="20" fill="#fff"></rect>
              <rect width= "90" height="30" x="50" y="45" fill="#fff"></rect>
              
          </svg>
      </div>
      <h2>Япония</h2>
      <div>
          <svg width="180" height="120">
              <rect width="180" height="120"  x="0" y="0" fill="#fff" />
              <circle cx="90" cy="60" r="50" style="fill: #bc002d"
              </svg>
      </div>
  `;
});