import './intro.css';

function Intro(){
    return(
        <center>
        <div class="pic">
             {/* <img src='./logo512.png' />  */}
             <h1 style={{color:'rgb(49, 233, 240)'}}><b></b>React</h1>
             <h2> A javascript library for building user interfaces</h2>
             <div>
             <button className="ui blue button">Get Started</button>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style={{color:'skyblue'}}>Take the tutorial</h3>
             </div>

  </div>
  </center>
    )
}
export default Intro;