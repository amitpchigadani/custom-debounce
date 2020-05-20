// Import stylesheets
import './style.css';

// Write Javascript code!

let i = document.getElementById('debounce');


function print(msg, event) {
  console.log(msg, 'clicked')
  // event.stopPropagation()
}

window.myDebounce = (fn, delay) => {
  console.log(arguments) 
  let timer;
   return function() {
     console.log(arguments) 
     const args = arguments ;
      if(timer) clearTimeout(timer);
      const self = this;
      timer = setTimeout(() => {
        fn.apply(self, args)
      }, delay);
   }
}

i.addEventListener('click', myDebounce(print.bind(this, 'hello'), 3000));
