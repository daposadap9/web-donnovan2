import './App.css'
import { useEffect} from 'react'
import axios from 'axios'

function App() {

  //logica de javascriptttttttttttttttttttttt

  
  useEffect(()=>{
    const URL = "http://190.143.102.99:28281/trazabilidad.asmx";


    const xmlData =`<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
    <soap:Header/>
    <soap:Body>
       <tem:GET_TRAZABILITY_SHIPPING>
          <!--Optional:-->
          <tem:ENVIO>RA263144718CO</tem:ENVIO>
       </tem:GET_TRAZABILITY_SHIPPING>
    </soap:Body>
 </soap:Envelope>`;

const config = {
  headers: {
    'Content-Type': 'text/xml'

  }
};

axios.post(URL, xmlData, config)
  .then(res => {console.log(res.data);})
  .catch(err => {console.log(err);});
  },[])
   //logica de javascript
   //html
  return (
    <>
      <button className='rounded-md bg-blue-500 p-2 w-10 '>holaaaaaaa</button>
      <nav className='nav'>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
        <a href="http://facebook" target="_blank" rel="noopener noreferrer"><li>home</li></a>
      </nav>
      
    </>
  )

  //html
}


export default App
