const Main = () => {
  return (
    <main>
      <div className="info">
        <h1 className="dev-name">Adam Wrobel</h1>
        <p className="profession">Frontend Developer</p>
        <p className="website">adam-wrobel-web-dev.netlify.app</p>
        <div className="btn-s">
          <button className="email-btn">Email</button>
          <button className="linkedin-btn">LinkedIn</button>
        </div>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with code best
          practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h2>Interests</h2>
        <p>
          Coding. Singer. Travel geek. Code fanatic. Psychology. Astronomy.
          Board games. Coffee fanatic.
        </p>
      </div>
    </main>
  );
};

export default Main;
