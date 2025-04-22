import HomeAbout from './HomeAbout';
import HomeProducts from './HomeProducts';
import HomeHero from './HomeHero';
import HomeStore from './HomeStore';


function Home(){

    return(
        <>

        {/* Hero Section */}

        <HomeHero />  

        {/* About Section */}   

        <HomeAbout />

        {/*Products*/}

        <HomeProducts />

        {/* Store */}

        <HomeStore />

           
        </>
    );

}

export default Home;