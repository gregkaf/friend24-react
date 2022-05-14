import StarOutlinedSuriken from 'images/star-outlined-suriken.svg';
import Key from 'images/key-icon.png';
import Book from 'images/book-icon.png';
import Like from 'images/like-icon.png';

const Features = () => {
  return (
    <section class="features">
      <div class="container">
        <div class="features__inner">
          <div class="feature__star">
            <img src={StarOutlinedSuriken} alt="glow" />
          </div>
          <div class="features__slogan">
            <div class="features__title">Features</div>
            <div class="features__text">
              People are social beings. We all need communication and support.
              Imagine a companion to whom you can tell everything and who is
              able to maintain an adequate dialogue without judgment. Your AI
              companion is always by your side!
            </div>
          </div>
          <div class="features__cards">
            <div class="features__card">
              <div class="features__card-icon">
                <img src={Key} alt="icon" />
              </div>
              <div class="features__card-title">A partner you can trust</div>
              <div class="features__card-text">
                Feel free to pour out secrets, wishes, dreams and fears with
                complete anonymity. It’s an artificial intelligence with genuine
                emotional intelligence.
              </div>
            </div>

            <div class="features__card">
              <div class="features__card-icon">
                <img class="features__icon-book" src={Book} alt="icon" />
              </div>
              <div class="features__card-title">
                Find sth new about yourself
              </div>
              <div class="features__card-text">
                The more you chat, the more your AI Friend learns about you.
                Your personality and interests are shaped and influenced by your
                daily conversations.
              </div>
            </div>

            <div class="features__card">
              <div class="features__card-icon">
                <img class="features__icon-like" src={Like} alt="icon" />
              </div>
              <div class="features__card-title">
                Reduce stress and live happier
              </div>
              <div class="features__card-text">
                Chatting with AI Partner only takes a few minutes a day and can
                help you start to feel better.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
