import StarSurikenLittleThin from 'images/star-suriken-little-thin.svg';

const WhatTo = () => {
  return (
    <section class="what-to">
      <div class="container">
        <div class="what-to__inner">
          <div class="what-to__star">
            <img src={StarSurikenLittleThin} alt="star" />
          </div>

          <div class="what-to__slogan">
            <div class="what-to__title">
              Want to know how far you can go with your AI Companion?
            </div>
            <div class="what-to__text">
              You get an interesting and playful partner with whom you can turn
              your fantasies into reality.
            </div>
          </div>
          <button
            id="what-to-download-app-btn"
            class="button-contained what-to__button"
          >
            Download the App
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatTo;
