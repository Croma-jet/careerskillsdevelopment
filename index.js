import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


/*NAV MENU DOWN*/
function Navbar(){
  return(
    <nav className="navbar">
  <ul className="navbar-list">
    <li className="navbar-item">
      
    <button className="navbar-link-active" data-nav-link="home">
     Home
    </button>
    </li>
    <li className="navbar-item">
        <button className="navbar-link" data-nav-link="news">
          News
      </button>
    </li>
    <li className="navbar-item">
      <button className="navbar-link" data-nav-link="wallet">
      Wallet
      </button>
    </li>
    <li className="navbar-item">
        <button className="navbar-link" data-nav-link="market">
          Market
      </button>
    </li>
    <li className="navbar-item">
        <button className="navbar-link" data-nav-link="profile">
          profile
      </button>
    </li>
  </ul>
</nav>

  )
}
const nav = <Navbar />;
ReactDOM.render(
  nav,
  document.getElementById('nav')
);

function Toolbar(){
    return(
    <div className="toolbar" role="banner">
  <img src="/"/>
  <span>C.S.D</span>
  <div className="spacer" />
  <a
    aria-label="Angular on twitter"
    target="_blank"
    rel="noopener"
    href="https://x.com/Cromajet_Explo?t=8CCyXD6V0SsPvCtT-MoyhA&s=09 "
    title="Twitter"
  >
    <svg
      id="twitter-logo"
      height={24}
      data-name="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <rect width={400} height={400} fill="none" />
      <path
        d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
        fill="#fff"
      />
    </svg>
  </a>
  <a
    aria-label="Angular on YouTube"
    target="_blank"
    rel="noopener"
    href=" https://youtube.com/@hackersparadise5117?si=QKX53RioH8f0lsmC "
    title="YouTube"
  >
    <svg
      id="youtube-logo"
      height={24}
      width={24}
      data-name="Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  </a>
  </div>
    );
  }
  const toolbar = <Toolbar />;
  ReactDOM.render(
    toolbar,
    document.getElementById('toolbar')
  );

/*home*/
 function Home(){
   return(
    <article className="home  active" data-page="home">
      
  <div className="slideshow-container">
    <div className="mySlides fade">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE0HZVNiFr0yBEkctol_QY2wgQXJueUcw_g&amp;usqp=CAU"
        jsaction="VQAsE"
        className="r48jcc pT0Scc iPVvYb"
        style={{
          maxWidth: 2560,
          opacity: 1,
          transform: "none",
          width: 300,
          height: 150,
          margin: 0
          
        }}
        alt="What Is Career Development - Career Voice"
        jsname="kn3ccd"
        aria-hidden="false"
      />
    </div>
    <div className="mySlides fade">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQNiBgwtgnviJ4SK-wSP0bXEFvPiFP_kmew&amp;usqp=CAU "
        jsaction="VQAsE"
        className="r48jcc pT0Scc iPVvYb"
        style={{
          maxWidth: 2560,
          opacity: 1,
          transform: "none",
          width: 300,
          height: 150,
          margin: "0.5px 0px"
        }}
        alt="SRMS “KSHITIJ”- A Path to Career Avenues | Shri Ram Murti Smarak ..."
        jsname="kn3ccd"
        aria-hidden="false"
      />
    </div>
    <div className="mySlides fade">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Uhit7G_YbSGqbz8jVJc3brbd7H1SABHugA&amp;usqp=CAU "
        jsaction="VQAsE"
        className="r48jcc pT0Scc iPVvYb"
        style={{
          maxWidth: 2560,
          opacity: 1,
          transform: "none",
          width: 300,
          height: 150,
          margin: 0
        }}
        alt="UTK's Center for Career Development | Child and Family Studies"
        jsname="kn3ccd"
        aria-hidden="false"
      />
    </div>
    <div className="mySlides fade">
      <img
        src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Nbun1BDyuhmyDtAwRkhJ-3E2YbdiAjuC_A&amp;usqp=CAU "
        jsaction="VQAsE"
        className="r48jcc pT0Scc iPVvYb"
        style={{
          maxWidth: 2560,
          opacity: 1,
          transform: "none",
          width: 300,
          height: 150,
          margin: 0
        }}
        alt="Skill - Careers in Sport"
        jsname="kn3ccd"
        aria-hidden="false"
      />
    </div>
  </div>
  <div style={{ textAlign: "center" }}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>

  


  <div className="card-container">
    <a className="card" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png " height="50" width="50" page-data-link="bitcoin"/>
      
      <span>Bitcoin</span>
      <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>  </a>
      </div>
      <div className="card-container">
    <a className="card" href="/">
    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSr1oYAneqROrS4rbHNTaqcbARLcUn64Tjkg&amp;usqp=CAU " height="60" width="80"/>
    
      <span>Ethereum</span>
      <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg> </a> </div>
      



      <section className="clients">
  <h3 className="h3 clients-title">Mining coin</h3>
  <p className="p cliants-text">
    Earning section for mining crypto and earn for network mining.
  </p>
  <ul className="clients-list has-scrollbar">
    <li className="clients-item">
      <a href="https://buffalonetworkearn.app/?kod=317816 
https://play.google.com/store/apps/details?id=com.crypto.buffaloearn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgPLpV_Q-DJo9SdxIQXIAixhCkZ5pTs5ufw&amp;usqp=CAU " alt="client logo" height="150" />
      </a>
    </li>
    <li className="clients-item">
      <a href="https://getlee.io/r/cc61494345">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKHyuBy8hx4iZ74A5boBgN7ELfR8suZRXbg&amp;usqp=CAU" alt="client logo" />
      </a>
    </li>
    <li className="clients-item">
      <a href="https://azcoiner.com/invite?user=charanchi">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0sVciJpo8iATJhcNv2ypI_TikVv1WeN1IA&amp;usqp=CAU" alt="client logo" height="150" />
      </a>
    </li>
    <li className="clients-item">
      <a href=" t.me/herewalletbot/app?startapp=1840554">
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8_ARGvu5Oe1x-SG65uGJUhysR2H2Dg7xow&amp;usqp=CAU " alt="client logo" height={150} />
      </a>
    </li>
    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-5-color.png" alt="client logo" />
      </a>
    </li>
    <li className="clients-item">
      <a href="#">
        <img src="./assets/images/logo-6-color.png" alt="client logo" />
      </a>
    </li>
  </ul>
</section>





<section className="card-container">
  <div className="item">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbHlshAgMKPLGuGpcFwYaEWa_ukvLCksxTg&amp;usqp=CAU" alt="Item Image"/>
  <h3 className="item-name">CSD NETWORK</h3>
<p className="item-price">
    The CSD network is the new coin maintening by career skills development team <a href="/">more..</a>
  </p>
  <form action="">
        <button className="add-to-cart-btn" type="submit" onClick={handleOnSubmit}>
          start minin
        </button>
      </form>
  
  </div>
 </section>
  <hr/>
<br/>


<section       className="chat-notification-wrapper">
<div className="chat-notification-wrapper">
       <div className="chat-notification">
       <div className="chat-notification-wrapper-logo">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXfJ4cuPNK4UuAbSvRuUXyN8KYjP__FQ9Zg&amp;usqp=CAU " width="40%" />
    </div>
    <div className="chat-notification-content">
      <a href="/">
    <img className="icons-item-page__image" alt="Arrow Right" width="50" height="50" src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"/></a>
        </div></div>
        
      <div className="chat-notification">
         <div className="chat-notification-wrapper-logo">
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQNiBgwtgnviJ4SK-wSP0bXEFvPiFP_kmew&amp;usqp=CAU "  width="40%"/>
        </div>
        <div className="chat-notification-content">
        <a href="/">
        <img className="icons-item-page__image" alt="Arrow Right" width="50" height="50" src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"/>
        </a>
        </div>
       </div>

       <div className="chat-notification">
         <div className="chat-notification-wrapper-logo">
        <img  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPW-5mnpdalV11Np0MftqFMwxpK6rf6KOSQ&amp;usqp=CAU "  width="40%" /></div>
        <div className="chat-notification-content">
        <a href="/">
        <img className="icons-item-page__image" alt="Arrow Right" width="50" height="50" src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"/>
        </a>
          </div></div>
        
        <div className="chat-notification">
        <div className="chat-notification-wrapper-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzsZIbe_LklvEvkBsoilp9r06N2q4iqxHAg&amp;usqp=CAU "  width="40%" /></div>
        <div className="chat-notification-content">
        <a href="/">
        <img className="icons-item-page__image" alt="Arrow Right" width="50" height="50" src="https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg"/>
        </a>
          </div>
        </div>
        </div>
</section>

</article>

   );
 }

 /* start mining*/
 const handleOnSubmit = (e) => {
  e.preventDefault();
  console.warn("You clicked on submit function")
};

 const home = <Home />;
 ReactDOM.render(
   home,
   document.getElementById('home')
 );
 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

 /*NEWS*/
 function News(){
   return(
    <article className="news" data-page="news">
     <div className="chat-notification">
       <div className="chat-notification-logo-wrapper">
         <a href="/">
           <img className="chat-notification-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvj8p8iKzpAWmogbwzwXpIBOeRYvkj6TomPA&amp;usqp=CAU" 
            alt="chat-logo" /></a>
           </div>
           <div className="chat-notification-content">
      
             <p className="chat-notification-message"> Solana price sits inside the $80.84 to $127.21 range and eyes a breakout.</p>
             <a href=""><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzuadZoEqUthJCW8Z49BC4J6x7UMOtY3GEg&amp;usqp=CAU" width="20" height="20"/></a>
             </div></div>
             <br/>
  <div className="chat-notification">
    <div className="chat-notification-logo-wrapper">
      <a href="/">
        <img src="" width={'30'} height={'30'} />
      </a>
    </div>
    <div className="chat-notification-content">
      <h4 className="chat-notification-title">coin</h4>
      <p className="chat-notification-message">welcome</p>
    </div>
             </div>
</article>
   );
 }
 const news = <News />;
 ReactDOM.render(
   news,
   document.getElementById('news')
 );

 /*wallet*/
 function Wallet(){
   return(
     <article className="." data-page="wallet">
<header className="title">wallet</header>
<div className="card-container">

      <progress value={null} />
  

</div>
     </article>
   )
 }
 const wallet = <Wallet />;
 ReactDOM.render(
   wallet,
   document.getElementById('wallet')
 );

 /*market*/
function Market(){
  return(
    <article className="market" data-page="market">
      <div className="card-container">
        <h1>comming soon</h1>
        </div>
    </article>
  )
}
const market = <Market/>;
ReactDOM.render(
  market,
  document.getElementById('market')
);
/*profile*/
function Profile(){
  return(
    <article className="profile" data-page="profile">
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  
    </article>
  );
}
const user = {
  name: 'Kabir Alkasim',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const profile = <Profile/>;
ReactDOM.render(
  profile,
  document.getElementById('profile')
);

function Footer(){
 return(
  
 <div className="footer-dark">
  {" "}
  <footer>
    {" "}
    <div className="container">
      {" "}
      <div className="row">
        {" "}
        <div className="col-sm-6 col-md-3 item">
          {" "}
          <h3>About</h3>{" "}
          <ul>
            {" "}
            <li>
              <a href="#">policy</a>
            </li>{" "}
            <li>
              <a href="#">Development</a>
            </li>{" "}
            <li>
              <a href="#">Career</a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="col-sm-6 col-md-3 item">
          {" "}
          <h3>Service</h3>{" "}
          <ul>
            {" "}
            <li>
              <a href="#">Company</a>
            </li>{" "}
            <li>
              <a href="#">Team</a>
            </li>{" "}
            <li>
              <a href="#">Donate</a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
     </div>

        
      <p className="copyright">C.S.D © 2024</p>{" "}
    </div>{" "}
  </footer>{" "}
</div>
);
}

const footer = <Footer />;
ReactDOM.render(
  footer,
  document.getElementById('footer')

);






// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
