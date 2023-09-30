import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import logo from './assets/mockup.png'
import logo2 from './assets/mockup2.png'
import icon from './assets/logo.png'
import { API_KEY, API_URL } from '../config'

const supabase = createClient(API_URL, API_KEY);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
  <body>

<header className="nav">
  <nav>
  <h1>codefrie</h1>
  <p>home</p>
  <p>porjets</p>
  <p>me contacter</p>
  </nav>
  <div className="contact-button">
    <a>me contacter</a>
  </div>
</header>


<main>
  <section className="header">
    <div className="headerText">
      <div><h3 className="grey-text inline">Build a creative</h3></div>
      <div><h3 className="black-text inline">Mobile app</h3></div>
      <div><p>Quick and easy getting started</p></div>
      <div><p>with carefully crafted ready-to-go templates.</p></div>
    </div>
    <div className="mobile1">
    <img src={logo} alt="Logo" className="img"/>;
    </div>
    <div className="mobile2">
    <img src={logo2} alt="Logo" className="img"/>;
    </div>
  </section>

  <section className="projets">
      <div className="projets-text">
      <p className="text">With best in class</p>
      <p className="text">features and design</p>
        <p className="text">templates.</p>
        </div>
<article className="block-projets">
<div>
  <img src={icon} alt="Logo" className="icon"/>
  <p>errrrrggrrg</p>
  <a class="button -small -outlined" target="_blank" href="https://demo.clbthemes.com/get_figma">
<i class="icon -left margin-right">
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.79079 0.209209C10.0697 0.488155 10.0697 0.940416 9.79079 1.21936L1.21936 9.79079C0.940416 10.0697 0.488155 10.0697 0.209209 9.79079C-0.0697365 9.51184 -0.0697365 9.05958 0.209209 8.78064L8.78064 0.209209C9.05958 -0.0697365 9.51184 -0.0697365 9.79079 0.209209Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60714 0.714286C1.60714 0.319797 1.92694 1.06437e-08 2.32143 1.06437e-08H9.28571C9.6802 1.06437e-08 10 0.319797 10 0.714286V7.67857C10 8.07306 9.6802 8.39286 9.28571 8.39286C8.89122 8.39286 8.57143 8.07306 8.57143 7.67857V1.42857H2.32143C1.92694 1.42857 1.60714 1.10877 1.60714 0.714286Z" fill="white"></path></svg>
</i>
Get Files
</a>
</div>


    
<div>
      <p>326 +</p>
      <p>
“One of the best themes I've ever used, didn't have to reach support yet and I've been working 3 months with it. Congratulations to Colabrio for their awesome work.”</p>
<a class="button -small -outlined" target="_blank" href="https://demo.clbthemes.com/get_figma">
<i class="icon -left margin-right">
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.79079 0.209209C10.0697 0.488155 10.0697 0.940416 9.79079 1.21936L1.21936 9.79079C0.940416 10.0697 0.488155 10.0697 0.209209 9.79079C-0.0697365 9.51184 -0.0697365 9.05958 0.209209 8.78064L8.78064 0.209209C9.05958 -0.0697365 9.51184 -0.0697365 9.79079 0.209209Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60714 0.714286C1.60714 0.319797 1.92694 1.06437e-08 2.32143 1.06437e-08H9.28571C9.6802 1.06437e-08 10 0.319797 10 0.714286V7.67857C10 8.07306 9.6802 8.39286 9.28571 8.39286C8.89122 8.39286 8.57143 8.07306 8.57143 7.67857V1.42857H2.32143C1.92694 1.42857 1.60714 1.10877 1.60714 0.714286Z" fill="white"></path></svg>
</i>
Get Files
</a>
    </div>

    <div>
      <span><p>Design Quality</p></span>
      <p>
“One of the best themes I've ever used, didn't have to reach support yet and I've been working 3 months with it. Congratulations to Colabrio for their awesome work.”</p>
<p>by JoaquinLaser</p>
    </div>
</article>
  </section>

  <section className="bottom-part">

  </section>

  <section className="portfolio">
    <h2>Carefully crafted</h2>
    <p>demo mobile app.</p>
    <p>Choose and mix up demos and components with no coding skills.</p>
    <p>Only real business demo websites.</p>

    <article className="portfolio-article">

      {countries.map((country) => (
       <div className="portfolio-uniq">
        <div>
          <img src={country.image} alt="Logo" className="icon"/>
        </div>
         
         <h5 key={country.name}>{country.name}</h5>
         <h5 className="portfolio-type" key={country.name}>{country.type}</h5>
       </div>
      ))}

    </article>
</section>
</main>

<footer>
<article className="footer-top">
<div>
    <h2>Regular update</h2>
    <p>Have a good idea or an improvement? It can be ended up in our updates!</p>
  </div>

  <div>
    <h2>1+ Years</h2>
    <p>Have a good idea or an improvement? It can be ended up in our updates!</p>
  </div>

  <div>
    <h2>Customer suppport</h2>
    <p>Have a good idea or an improvement? It can be ended up in our updates!</p>
  </div>

  <div>
    <h2>Feedback Apreciative</h2>
    <p>Have a good idea or an improvement? It can be ended up in our updates!</p>
  </div>
</article>
<div className="separator"></div>
<div className="footer-bottom">
  <p>copyright © CodeFrie 2023</p>
</div>
</footer>

  </body>
  );
}

export default App;