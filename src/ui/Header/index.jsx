import Orbit from '../../images/orbit.svg';
import Girl from '../../images/pink-girl.png';
import HeartNumbered from '../../images/heart-numbered.png';
import Logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header>
      <div class="container">
        <nav class="navigation">
          <a class="navigation__logo" href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div class="navigation__buttons-group">
            <div class="navigation__buttons-group-inner">
              <a id="nav-feature" class="navigation__link" href="/">
                Feature
              </a>
              <a id="nav-about" class="navigation__link" href="/">
                About
              </a>
            </div>
            <button id="nav-contact-us" class="button-outlined">
              Contact us
            </button>
          </div>
        </nav>
        <main>
          <img class="orbit" src={Orbit} alt="orbit" />
          <div class="star-suriken-contained-little-bold">
            <img
              src="images/star-suriken-contained-little-bold.svg"
              alt="star"
            />
          </div>
          <div class="navigation__intro">
            <div class="navigation__main-text">
              <div class="navigation__title">
                A girlfriend who is available 24/7
              </div>
              <div class="navigation__sub-title">The AI partner who cares</div>
              <button
                id="nav-downloa-app-btn"
                class="button-contained header__button"
              >
                Download the App
              </button>
            </div>
            <div class="navigation__figure">
              <div class="girl-cloud">Hello, I'm Lisa</div>
              <div class="heart-one-up">
                <img src={HeartNumbered} alt="heart-one-up" />
              </div>
              <div class="navigation__figure-inner">
                <img src={Girl} alt="girl" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Header;
