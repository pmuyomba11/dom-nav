
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.style.height = '100vh'

mainEl.innerHTML = '<h1> CODING ROCKS.. </h1>';
mainEl.className = 'flex-ctr';

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.className = 'flex-around';


menuLinks.forEach((el) => {
    const linkEl = document.createElement('a');
    linkEl.href = el.href;
    linkEl.textContent = el.text;

    //Appending....
    topMenuEl.append(linkEl)

})
