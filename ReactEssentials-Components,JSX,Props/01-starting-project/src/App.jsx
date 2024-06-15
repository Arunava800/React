import {CORE_CONCEPTS as crc} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';


function App() {
  return (
    <div>
      <Header />
  
      <main>
      {/* Core concepts id is used for styling used in index.css file */}
        {/* Custom attributes can be added to the custom components */}
            {/* "tilte" and "description" attributes are known as props as the concept of configuring components
            is called props.  */}
        <section id = "core-concepts"> 
          <h2>Time to get started! </h2>
          <ul>
            <CoreConcepts
             title={crc[0].title}
             description={crc[0].description}
            image = {crc[0].image}
            /> 
           <CoreConcepts {...crc[1]}/>
           <CoreConcepts {...crc[2]}/>
           <CoreConcepts {...crc[3]}/>

            




          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
