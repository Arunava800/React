// When working with react functions, there is only one function which can be called any thing but it generally
// named as props

export default function CoreConcepts({image, title, description}){
    return(
    <li>
      <img src = {image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
  
    </li>);
  }
  