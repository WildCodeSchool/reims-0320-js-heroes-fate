import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <section className="sectionOne">
            <img className="imgLogo" src="https://zupimages.net/up/20/16/gwq6.png" alt="Logo Hero Fate" />
            <p className="Slogan">Will you change the fate of your hero ?</p>
            <div className="button__container">
              <button
                className="homeButton"
                onClick={this.props.clickRules}
                type="button"
              >
                How to play
              </button>
              <button
                className="homeButton"
                onClick={this.props.clickPlay}
                type="button"
              >
                <span>Play</span>
              </button>
            </div>
          </section>

          <img className="separation__img" src="https://rocketleague.media.zestyio.com/rl_rp6_down-arrow_7917.png" alt="" />
          <section className="sectionTwo">
            <div className="sectionTwo__container">
              <div className="sectionTwo__textcontainer">
                <h2>Bienvenue sur Heroes Fate</h2>
                <p className="Slogan">Choisis ton univers, ton héros et pars jouer des parties endiablées pour venir à bout de tes pires ennemis</p>
                <div className="block__container">
                  <div className="littleBlock">
                    <img className="littleBlock__img" src="https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/342x342/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://shop.eaglemoss.com/static/media/catalog/product/i/m/abyswe045_3.jpg" alt="" />
                    <div className="littleBlock__text">
                      <p>Différents Univers ...</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                  <div className="littleBlock">
                    <img className="littleBlock__img" src="https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/342x342/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://shop.eaglemoss.com/static/media/catalog/product/i/m/abyswe045_3.jpg" alt="" />
                    <div className="littleBlock__text">
                      <p>... pour différents héros</p>
                      <p>Un choix varié d'univers allant de Marvel à DC en passant par Star Wars</p>
                    </div>
                  </div>
                </div>
              </div>
              <img className="sectionTwo__img" src="https://purepng.com/public/uploads/medium/purepng.com-spider-manspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-lee-1701528654990oleyd.png" alt="Logo Hero Fate" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Homepage;
