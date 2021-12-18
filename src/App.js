import "./App.css";
import photo2 from "./photo2.jpg";
import "./Styl.css";
function App() {
  return (
    <>
      <div
        style={{
          border: "solid 1px black",
          maxWidth: "70%",
          margin: "30px auto",
          textAlign: "center",
          padding: "30px",
        }}>
        <h1 className='title'>Your name here</h1>
        <p className='red title'>
          loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        </p>
        <br />

        <div className='flex'>
          <img src='./photo1.jpg' alt='prev' />
          <img src={photo2} alt='next' />
        </div>
        <br />
        <video
          width='50%'
          height='240'
          controls
          style={{ margin: "15px auto" }}>
          <source src='myVideo.mp4' type='video/mp4' />
        </video>
      </div>
      <footer>
        <section className='copyw'>
          <p>copy right C</p>
        </section>
        <section className='links'>
          <a href='#'>Facebook</a>
          <a href='#'>google</a>
          <a href='#'>linkein</a>
        </section>
      </footer>
    </>
  );
}

export default App;
