import cloud from '../img/cloud_2601-fe0f.png'

const Home = () =>{
    return(
        <div className="container-clouds">
            <div className="clouds">
                <img className="cloud-middle1 small speed4" src={cloud} />
                <img className="cloud-start1 large speed2" src={cloud} />
                <img className="cloud-end3 medium speed6" src={cloud} />
                <img className="cloud-middle4 small speed7" src={cloud} />
                <img className="cloud-start2 large speed3" src={cloud} />
                <img className="cloud-middle2 small speed1" src={cloud} />
                <img className="cloud-start3 small speed3" src={cloud} />
                <img className="cloud-end1 medium speed4" src={cloud} />
                <img className="cloud-middle3 large speed5" src={cloud} />
                <img className="cloud-end4 small speed7" src={cloud} />
                <img className="cloud-start4 medium speed2" src={cloud} />
            </div>
        </div>
  );
}

export default Home