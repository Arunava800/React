import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS as crc} from './data.js'
const reactDescriptions = ["Fundamental","Crucial", "Core"];

function getRandomInt(max){
  return Math.floor(Math.random()* (max+1));
}

// When working with react functions, there is only one function which can be called any thing but it generally
// named as props

function Header(){
  const descriptions  = reactDescriptions[getRandomInt(2)];
 
  return(<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {descriptions} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);


}

function CoreConcepts({image, title, description}){
  return(
  <li>
    <img src = {image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>

  </li>);
}

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
