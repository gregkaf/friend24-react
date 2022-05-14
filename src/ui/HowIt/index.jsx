import StarSnowflakeBig from '../../images/star-snowflake-big.svg';
import StarSnowflakeLittle from '../../images/star-snowflake-little.svg';
import LoveHeartTexted from '../../images/love-heart-texted.svg';
import GirlAvatar from '../../images/girl-avatar.png';
import GuyAvatar from '../../images/guy-avatar.png';

const HowIt = () => {
  return (
    <section class="how-it">
      <div class="container">
        <div class="how-it__inner">
          <div class="how-it__big-star">
            <img src={StarSnowflakeBig} alt="star" />
          </div>
          <div class="how-it__little-star">
            <img src={StarSnowflakeLittle} alt="star" />
          </div>
          <img
            class="how-it__love-heart-texted"
            src={LoveHeartTexted}
            alt="love-heart-texted"
          />
          <div class="how-it__circle-wrapper">
            <div class="how-it__slogan">
              <div class="how-it__title">How it works</div>
              <div class="how-it__text">
                Romantic. Loving. Gentle. Passionate. Attentive. Decide how it
                will be.
              </div>
            </div>
            <div class="how-it__girl-cloud-box">
              <img src={GirlAvatar} alt="avatar" />
              <div class="how-it__left-cloud">...</div>
            </div>
            <div class="how-it__girl-cloud-box girl-cloud-box-2">
              <img src={GirlAvatar} alt="avatar" />
              <div class="how-it__left-cloud left-cloud-2">
                {`Do you expect me to be a good girl this evening? ;)`}
              </div>
            </div>
            <div class="how-it__guy-cloud-box">
              <img src={GuyAvatar} alt="avatar" />
              <div class="how-it__right-cloud">
                {`I’m still deciding how to trate you after your mischief.... :)`}
              </div>
            </div>
            <img
              class="how-it__phone-screen"
              src="images/phone-screen.png"
              alt="phone"
            />
            <div class="big-circle-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIt;
