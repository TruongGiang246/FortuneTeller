import './Matrixdes.css'
import { useEffect } from 'react';
function Matrixdes(){
    useEffect(() => {
      const LmaoButton = document.getElementById("buttonLmao")
      const choose = document.getElementsByClassName("container_input");
      let flag = false;
      let justOneTime = 0;
      
      choose[0].focus();
      for(let i = 0; i < choose.length; i++){
        choose[i].onkeydown = (e) =>{
            if(e.keyCode == '8' && i != 0 && choose[i].value == ""){
              choose[i-1].focus();
              console.log(e.keyCode);
            }
          }
        choose[i].oninput = (e) => {
          
          if(choose[i].value.length > 1){
            choose[i].value = choose[i].value[1];
            if(i != 7){
              choose[i+1].focus();
            }
          }
          if(choose[i].value.length == 1 && i != 7){
            choose[i+1].focus();
          }
        }
      }
      let valueBirth = [];
      
      function check(){
        for(let i = 0; i < 8; i++){
          console.log(choose[1].value);
          if(choose[i].value == ""){
            alert("CH nhap du so")
            break;
          }
          if(i == 7){
            flag = true;
          }
        }
      }
      
      LmaoButton.onclick = () => {
        check();
        if(flag && justOneTime == 0){
            for(let i = 0; i < 8; i++){
            valueBirth.push(choose[i].value);
              justOneTime = 1;
          }
        }
        console.log(valueBirth);
      }
      
      
    
    
    },[])

    return(
        <>
    <div className="wrap">
    <div className="container">
        <div className="input">
          <input className="container_input" type="text" />
          <input className="container_input" type="text" />
          <h1>/</h1>
          <input className="container_input" type="text" />
          <input className="container_input" type="text" />
          <h1>/</h1>
          <input className="container_input" type="text" />
          <input className="container_input" type="text" />
          <input className="container_input" type="text" />
          <input className="container_input" type="text" />
        </div>
        <div className="button"> 
          <button id="buttonLmao">Lmao</button>
        </div> 
      </div>
    </div>
    </>
    )
}
export default Matrixdes;
