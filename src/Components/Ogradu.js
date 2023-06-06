import {Link} from 'react-router-dom';
import Slika3 from '../Slike/napulj2.jpg'
function Ogradu(){
    return(
        <center>
             <div className='navigacija'> 
            <table>
               
                    <td>
                        <Link to="/">Povratak na pocetnu</Link>
                    </td>
               
            </table>

        </div>

        <div className='tekst_napulj'>
            <h2>O NAPULJU</h2>
        <p>Napulj (grčki: Neapolis; napolitanski: Napule; talijanski: Napoli) glavni je grad talijanske pokrajine Kampanije (Campania), smješten na obali Tirenskoga mora. Zauzima najveći dio prostranog Napuljskog zaljeva, prostirući se do padina Vezuva i brežuljaka u unutrašnjosti. Napulj je najveći grad južne Italije s oko 920 000 stanovnika, te oko 3 milijuna u širem gradskom području, čime je treći po veličini u Italiji poslije Rima i Milana. To je živahan, slikovit i gusto naseljen mediteranski grad koji je zadnjih godina doživio procvat turizma te se intenzivno razvija u tom pravcu. Kako je uz to i luka, promet je vrlo gust, za strance i kaotičan. Javni prijevoz još uvijek nije na razini potreba grada i njegovih gostiju, no u suradnji sa EU u procesu su izgradnje dodatne trase podzemne željeznice koje će bitno poboljšati prometnu povezanost grada i neposredne okolice, posebice vezu između zračne luke Capodichino sa gradom. Za Napulj se godinama kao karakteristika vezivala jaka lokalna mafija (Camorra), no s vremenom se i ona transformirala pa turisti zapravo ne osjećaju njezino postojanje. Pored službenog talijanskog jezika u gradu se govori i tradicionalni napolitanski jezik. Povijesno središte Napulja uvršteno je 1995. u UNESCOv popis mjesta svjetske baštine u Europi.</p>
        </div>
        <img src={Slika3} className="slika3">
        
        </img>
        </center>
    )
}

export default Ogradu;