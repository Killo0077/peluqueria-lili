import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      {/* ✅ Bubble animation layer */}
      <div className="bubbles">
        {[...Array(60)].map((_, i) => {
          const size = Math.floor(Math.random() * 40) + 10; // size between 10–50px
          const left = Math.random() * 100; // random left position in %
          const duration = Math.random() * 8 + 6; // 6–14s

          return (
            <span
              key={i}
              className="bubble"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      {/* Navigation bar */}
      <nav className='navbar'>
        <ul>
          <li><a href='#inicio'>Inicio</a></li>
          <li><a href='#Servicios'>Servicios</a></li>
          <li><a href='#Contacto'>Contacto</a></li>
        </ul>
      </nav>

      <div
        className="hero-image"
        style={{
          backgroundImage: "url('/image/back1.png')",
        }}
      ></div>

      




      {/* Header (now BELOW image) */}
      {/*<header className="header">
        <h1>Peluquería Canina Lili</h1>
        
        <p>¡Cuidado, amor y estilo para tu peludo!</p>
      </header>*/}

      




      {/* Main content */}
       <main className="main">
        {/*<div className="card">
          <h2>Servicios</h2>
          <div className="services-images">
            <img src="/image/bath.png" alt="Baño" />
            <img src="/image/cut.png" alt="Corte de pelo" />
            <img src="/image/styling.png" alt="Limpieza" />
          </div>
        </div>*/}

      <div className="service-cards">
  <a href="#baño" className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src="/image/bath.png" alt="Baño" />
      </div>
      <div className="card-back">
        <img src="/image/bath1.png" alt="Baño Detalle" />
      </div>
    </div>
  </a>

  <a href="#corte" className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src="/image/cut.png" alt="Corte" />
      </div>
      <div className="card-back">
        <img src="/image/cut1.png" alt="Corte Detalle" />
      </div>
    </div>
  </a>

  <a href="#estilo" className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src="/image/styling.png" alt="Estilo" />
      </div>
      <div className="card-back">
        <img src="/image/styling1.png" alt="Estilo Detalle" />
      </div>
    </div>
  </a>
</div>


      </main>

<header className="header">
        <h1>Peluquería Canina Lili</h1>
        
        <p>En Peluqueria Lili, nos dedicamos con pasion al cuidado y embellecimiento de tu mejor amigo.
        Ofrecemos servicios profesionales de bano, grooming y estilizado para perros de todas las razas y tamanos.
        Nuesto equipo esta formado por peluqueros expertos que brindan atencion personalizada, priorizando siempre el bienestar, la comodidad y el estilo de tu mascota.</p>
        <h3>Dejalo en manos expertas y haz que luzca increible!!!</h3>
      </header>

<div className="social-links">
  <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
    <img src="/image/instagram.png" alt="Instagram" className="social-icon" />
  </a>
  <a href="https://facebook.com/your_profile" target="_blank" rel="noopener noreferrer">
    <img src="/image/facebook.png" alt="Facebook" className="social-icon" />
  </a>
  
</div>
<p>Siguenos en las redes !!!</p>





      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Peluquería Canina Lili. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
