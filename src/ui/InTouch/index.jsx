import BigStar from 'images/star-snowflake-big.svg';

const InTouch = () => {
  return (
    <section class="in-touch">
      <div class="container">
        <div class="in-touch__inner">
          <div class="in-touch__big-star">
            <img src={BigStar} alt="star" />
          </div>
          <div class="features__slogan">
            <div class="features__title">Get in Touch</div>
            <div class="features__text">
              You can share your thoughts and ideas, as well as get some
              insights about upcoming features in the app
            </div>
          </div>
          <div class="in-touch__form">
            <div class="in-touch__form-inner">
              <input
                class="in-touch__input"
                type="text"
                placeholder="Full Name"
              />
              <input
                class="in-touch__input"
                type="text"
                placeholder="Email Address"
              />
              <textarea
                class="in-touch__message"
                placeholder="Message"
                id="message"
                cols="30"
                rows="4"
              ></textarea>
              <button class="in-touch__button button-outlined">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InTouch;
