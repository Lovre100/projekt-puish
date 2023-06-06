import {Link} from 'react-router-dom';
import Aktivnost1 from "../Slike/aktivnost1.jpg"
import Aktivnost2 from "../Slike/aktivnost2.jpg"
import Aktivnost3 from "../Slike/aktivnost3.jpg"
import Aktivnost4 from "../Slike/aktivnost4.jpg"
import Aktivnost5 from "../Slike/aktivnost5.jpg"

export default function Turizam(){
    return(
        <div>
            <div className='navigacija'> 
            <table>
               
                    <td>
                        <Link to="/">Povratak na pocetnu</Link>
                    </td>
               
            </table>

        </div>
        <table className="turizam1">
            <h1>Turističke aktivnosti</h1>
            <tr>
                <td>Walking Tour on the Path of Gods with Lunch & Wine</td>
                <td><img src={Aktivnost1}></img></td>
            </tr>
            <tr>
                <td>Day trip to Ischia Island with Lunch</td>
                <td><img src={Aktivnost2}></img></td>
            </tr>
            <tr>
                <td>Private Tour of Amalfi Coast</td>
                <td><img src={Aktivnost3}></img></td>
            </tr>
            <tr>
                <td>Coastal Cruise</td>
                <td><img src={Aktivnost5}></img></td>
            </tr>
            <tr>
                <td>Herculaneum Guided Tour</td>
                <td><img src={Aktivnost4}></img></td>
            </tr>

        </table>
        </div>
    )
}

