import React from 'react';
import argentinos from '../assets/images/argentinos.png';
import atleticotucuman from '../assets/images/atleticotucuman.png';
import banfield from '../assets/images/banfield.png';
import barracascentral from '../assets/images/barracascentral.png';
import riestra from '../assets/images/riestra.png';
import gimnasiadelaplata from '../assets/images/gimnasiadelaplata.png';
import huracan from '../assets/images/huracan.png';
import independiente from '../assets/images/independiente.png';
import independienterivadavia from '../assets/images/independienterivadavia.png';
import instituto from '../assets/images/instituto.png';
import river from '../assets/images/river.png';
import rosariocentral from '../assets/images/rosariocentral.png';
import talleres from '../assets/images/talleres.png';
import velez from '../assets/images/velez.png';
import belgrano from '../assets/images/belgrano.png';
import boca from '../assets/images/boca.png';
import centralcordoba from '../assets/images/centralcordoba.png';
import defensayjusticia from '../assets/images/defensayjusticia.png';
import estudiantesdelaplata from '../assets/images/estudiantesdelaplata.png';
import godoycruz from '../assets/images/godoycruz.png';
import lanus from '../assets/images/lanus.png';
import newells from '../assets/images/newells.png';
import platense from '../assets/images/platense.png';
import racing from '../assets/images/racing.png';
import sanlorenzo from '../assets/images/sanlorenzo.png';
import sarmiento from '../assets/images/sarmiento.png';
import tigre from '../assets/images/tigre.png';
import union from '../assets/images/union.png';


function SideBar(){
    return(
        <React.Fragment>
        <div className='escudos'>

         <img className="argentinos" src={argentinos} alt="argentinos"/>
         <img className="atleticotucuman" src={atleticotucuman} alt="atleticotucuman"/>
         <img className="banfield" src={banfield} alt="banfield"/>
         <img className="barracascentral" src={barracascentral} alt="barracascentral"/>
         <img className="riestra" src={riestra} alt="riestra"/>
         <img className="gimnasiadelaplata" src={gimnasiadelaplata} alt="gimnasiadelaplata"/>
         <img className="huracan" src={huracan} alt="huracan"/>
         <img className="independiente" src={independiente} alt="independiente"/>
         <img className="independienterivadavia" src={independienterivadavia} alt="independienterivadavia"/>
         <img className="instituto" src={instituto} alt="instituto"/>
         <img className="river" src={river} alt="river"/>
         <img className="rosariocentral" src={rosariocentral} alt="rosariocentral"/>
         <img className="talleres" src={talleres} alt="talleres"/>
         <img className="velez" src={velez} alt="velez"/>
         <img className="belgrano" src={belgrano} alt="belggrano"/>
         <img className="boca" src={boca} alt="boca"/>
         <img className="centralcordoba" src={centralcordoba} alt="centralcordoba"/>
         <img className="defensayjusticia" src={defensayjusticia} alt="defensayjusticia"/>
         <img className="estudiantesdelaplata" src={estudiantesdelaplata} alt="estudiantesdelaplata"/>
         <img className="godoycruz" src={godoycruz} alt="godoycruz"/>
         <img className="lanus" src={lanus} alt="lanus"/>
         <img className="newells" src={newells} alt="newells"/>
         <img className="platense" src={platense} alt="platense"/>
         <img className="racing" src={racing} alt="racing"/>
         <img className="sanlorenzo" src={sanlorenzo} alt="sanlorenzo"/>
         <img className="sarmiento" src={sarmiento} alt="sarmiento"/>
         <img className="tigre" src={tigre} alt="tigre"/>
         <img className="union" src={union} alt="union"/>
         </div>
         
        
        </React.Fragment>
    )
}
export default SideBar;