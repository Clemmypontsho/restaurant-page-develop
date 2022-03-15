const Navbar = () => {
  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar fixed-top');

  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'navLink');

  const navList = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const navLink1 = document.createElement('a');
    navLink1.setAttribute('id', 'home');
    navLink1.setAttribute('class', 'mx-2');
    navLink1.setAttribute('href', '#');
    navLink1.innerHTML = 'Home';
    list.appendChild(navLink1);

    const navLink2 = document.createElement('a');
    navLink2.setAttribute('id', 'menu');
    navLink2.setAttribute('class', 'mx-2');
    navLink2.setAttribute('href', '#');
    navLink2.innerHTML = 'Menu';
    list.appendChild(navLink2);

  

    return list;
  };

  navbarContent.appendChild(navLinks);
  navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;












const Home = () => {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'homepage container-fluid');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'home-header custom-font');
  homeHeader.innerHTML = 'RESTAURANT';

  const homeText = document.createElement('h3');
  homeText.setAttribute('class', 'home-text custom-font2');
  homeText.innerHTML = 'A better experience for the most famous dishes.';

  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeText);

  return homeContent;
};

export default Home;