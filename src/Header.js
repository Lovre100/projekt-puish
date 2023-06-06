import {Link} from 'react-router-dom';

import Slika1 from './Slike/napulj.jpg'

function Header (){

    return(
        <center>

        <div className='navigacija'> 
            <table>
                <tr>
                    <td>
                        <Link to="/ogradu">O Napulju</Link>
                    </td>
                    <td>
                        <Link to="/povijest">Povijest</Link>
                    </td>
                    <td>
                        <Link to="/turizam">Turizam</Link>
                    </td>

                </tr>
            </table>
            


        </div>
        <div className='slika_overlay'></div>
        <img src={Slika1} className='slika_pocetna'></img>
        <h1 className='naslov_napulj'>Napulj</h1>
        
        </center>
    )
}

export default Header;