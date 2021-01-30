import logo from './logo.svg';
import './App.css';
import Logo from './Media/logo.svg';
import ImageHero from './Media/image-hero.jpg';
import ImageInteractive from './Media/image-interactive.jpg';
import creations from './creations';

function App() {

  return (
    <div>
      <div id='mainDiv'>
        <div id='header'>
          <img src={Logo} />
          <div id='headerIconDiv'>
            <span className='headerIcon'>About</span>
            <span className='headerIcon'>Careers</span>
            <span className='headerIcon'>Events</span>
            <span className='headerIcon'>Products</span>
            <span className='headerIcon'>Support</span>
          </div>
        </div>
        <div id='mainSpanDiv'>
          <span id='mainSpan'>IMMERSIVE EXPERIENCES THAT DELIVER</span>
        </div>
      </div>
      <div id='secondDiv'>
        <img id='secondImage' src={ImageInteractive} />
        <div id='absoluteDiv'>
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class <br /> virtual reality projects for some of the best
            companies around the <br /> globe. Our award-winning creations have transformed <br /> business through digital experiencies
            that bind to their brand.
          </p>
        </div>
      </div>
      <div id='creationsDiv'>
        <div id='creationsMainDiv'>
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </div>
        <div className='displayFlex'>
          {creations.map(creation =>
            <div id='creationDiv' style={{ backgroundImage: `url(${creation.imgPath})` }}>
              <h2>{creation.title}</h2>
            </div>
          )}
        </div>
      </div>
      <footer id='footer'>
        <div>
          <img id='footerLogo' src={Logo} />
          <div>
            <span style={{ marginLeft: '0px' }} className='headerIcon'>About</span>
            <span className='headerIcon'>Careers</span>
            <span className='headerIcon'>Events</span>
            <span className='headerIcon'>Products</span>
            <span className='headerIcon'>Support</span>
          </div>
        </div>
        <div id='socialMediaDiv'>
          <div>
            <i id='icons' class="fab fa-facebook-square"></i>
            <i id='icons' class="fab fa-twitter"></i>
            <i id='icons' class="fab fa-pinterest"></i>
            <i id='icons' class="fab fa-instagram"></i>
          </div>
          <span id='copyrightSpan'>© Copyright Loopstudios. All right reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
