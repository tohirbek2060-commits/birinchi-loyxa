import './App.css';

function App() {
  return (
    <div className="container">

      {/* HEADER */}

      <div class="head">
        <div class="ka1">WIX</div>
        <div class="ka2">💻|📱</div>
        <div class="ka3">
          <div>Нажмите «Редактировать», чтобы создать свой сайт</div>
          <div class="kala">Редактировать</div>
        </div>
      </div>


      <header className="header">
        <h2 className="logo">Oleg Markov</h2>

        <nav>
          <a href="#">Главная</a>
          <a href="#">Обо мне</a>
          <a href="#">Связаться</a>
        </nav>
      </header>

      {/* GALLERY */}
      <section className="gallery">

        <div className="card img1">
          <img src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt=""/>
        </div>
        <div className="card img2">
          <img src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_302,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg" alt=""/>
        </div>
        <div className="card img3">
          <img src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg" alt=""/>
        </div>

        <div className="card img4">
                    <img src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg" alt=""/>
        </div>
        <div className="card img5">
                    <img src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg" alt=""/>
        </div>

        <div className="card img6">
                    <img src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg" alt=""/>
        </div>

        <div className="card img7">
                    <img src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg" alt=""/>
        </div>

        <div className="card img8">
                    <img src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg" alt=""/>
        </div>

        <div className="card img9">
                    <img src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg" alt=""/>
        </div>

      </section>

      <div class="loo">
        © 2035 Олег Марков. Сайт создан на Wix.com.


      </div>

    </div>
    
  );
}

export default App;