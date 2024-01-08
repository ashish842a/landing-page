import Advertisement from '../../components/Addvertisement/Advertisement';
import Hero from '../../components/Hero/Hero';
import Residence from '../../components/Residencies/Residencies';
import GetStarted from '../../components/GetStarted/GetStarted';
import '../Home/Home.css'
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
       <>
     <div className='Home'>
    <Hero />
    <Advertisement />
    <Residence />
    <Contact />
    <GetStarted />
     </div>
       </>
    );
};

export default Home;
