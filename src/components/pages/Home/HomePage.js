import './HomePage.css'
const Home = () => {
  return (
    <div className='main-container'>
      <div className='video_container'>
        <video src="/videos/video.mp4" autoPlay loop muted/>
        <h1>SES VE SAHNE SANATLARI ATÖLYESİ</h1>
      </div>
    </div>
  );
};

export default Home;
