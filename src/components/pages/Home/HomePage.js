import './HomePage.css'
const Home = () => {

  return (
    <>
    <div className='main_container'>
      <div className='video_container'>
        <video src="/videos/video.mp4" autoPlay loop muted/>
        <h1>SES VE SAHNE SANATLARI ATÖLYESİ</h1>
        <div className='logos'>
          <img src='/images/logos/kanald.png' />
          <img src='/images/logos/tv85.png' />
          <img src='/images/logos/sportstv.png' />
          <img src='/images/logos/toyota.png' />
          <img src='/images/logos/beko.png' />
          <img src='/images/logos/letgo.png' />
          <img src='/images/logos/yenibirileri.jpeg' />
          <img src='/images/logos/idea.jpeg' />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
