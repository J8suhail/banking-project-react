import IMG1 from'./image/card1.jpg';
import IMG2 from'./image/card2.jpg';
import IMG3 from'./image/card3.jpg';

function Cardsection(){
    return(
       
      <section id="cardssection"> <div> <h1> Costumised cash rewards </h1>
      <img src={IMG1}/>
        <p> No annual fee</p>
        <p> $200 </p>
        <p> Online bonus offer </p>
        <p> 3% cash back in the category of your choice </p>
       </div>
       <div> <h1> Costumised cash rewards </h1>
        <img src={IMG2}/>
          <p> Online bonus offer </p>
          <p> $200 </p>
          <p> Online bonus offer </p>
          <p> Unlimited 1.5 cashback on all purchases </p>
         </div>
         <div> <h1> Unlimited cash rewards </h1>
          <img src={IMG3}/>
            <p> Online bonus offer </p>
            <p> $200 </p>
            <p> Online bonus offer </p>
            <p> Unlimited 1.5 points for every $1 spent on all purchases </p>
           </div>
          
          
             
      </section>
    );
}

export default Cardsection;