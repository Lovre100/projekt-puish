import {Link} from 'react-router-dom';
import Slika4 from '../Slike/povijest1.jpg'
import Slika5 from '../Slike/povijest2.JPG'


function Povijest(){
    return(
        <div>
             <div className='navigacija'> 
            <table>
               
                    <td>
                        <Link to="/">Povratak na pocetnu</Link>
                    </td>
               
            </table>
      
            <div className='povijest'>
            <h1>Povijest</h1>
            
                <p>Povijest Napulja obiluje usponima i padovima, a u dva navrata bio je prijestolnica kraljevstava. Osnovali su ga drevni Grci između 7. i 6. st. pr. Kr. nazvavši ga Partenopa po mitskoj sireni, osnivačici grada, a nešto kasnije u njegovoj blizini izgradili su i naselje Nea Polis grčki: Νέα Πόλις, tj. Novi grad po kome duguje današnje ime. Grad je bio dio Velike Grčke, a okolica grada je bila poprište velikog sukoba tijekom Drugog punskog rata.
                Za rimske vladavine grad je zadržao grčki jezik i originalne običaje, a poslije pada Zapadnog Rimskog Carstva grad prelazi iz ruke u ruku različitih vladara. Danas se u gradu mogu naći spomenici svih tih bivših perioda vlasti.
                Novi dvorac Castel Nuov kojemu je veličanstveni renesansni portal uradio Lucijan Vranjanin.
                Nakon iscrpljujućeg Gotskog rata područjem je zavladalo Bizantsko Carstvo, da bi poslije zavladali Langobardi. U 11. stoljeću osvajaju ga Normani pod vodstvom Roberta Gviskara, te slijede Nijemci Hohenštaufovci, Anžuvinci od 8. do polovine 15. stoljeća, Aragon, Španjolska i naposljetku Burboni od 18. stoljeća do ujedinjenja Italije. Tada je Napulj postao glavni grad Kraljevstva Dvije Sicilije, a postao je i glavni grad Napuljskog Kraljevstva. U 17. stoljeću Napulj je s 300.000 stanovnika po veličini bio drugi grad u Europi poslije Pariza. Bourbonska vladavina ostavila je velebne građevine poput Kraljevske palače na Capodimonteu, gdje se danas nalazi bogati muzej</p>

               
                <img src={Slika4} ></img>
                <img src={Slika5}></img>
        
        
            </div>


        </div>
         
        </div>
        
    )
}

export default Povijest;