import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./TarotAreaStyle.css";
import { useNavigate } from "react-router-dom";


const TarotCard = ({frontImage, backImage, condit }) => {
    const [flipped, setFlipped] = useState(false);


    return (
      <motion.div
        className="tarot-card"
        onClick={() => {
            if(condit){
              setFlipped(!flipped)
            }
        }}
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.07 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="card-inner">
          <img
            src={flipped ? frontImage : backImage}
            alt="Tarot Card"
            className="card-face"
          />
        </div>
      </motion.div>
    );
  };
  
const TarotReading = () => {
    const navigate = useNavigate();
    const BaseUrl = "/FortuneTeller";
    const [canFlip, setCanFlip] = useState(false); 
    const cards = useRef([
      { front: `${BaseUrl}/images/card1.jpg`, back: `${BaseUrl}/images/back.webp`, number: 0},
      { front: `${BaseUrl}/images/card2.jpg`, back: `${BaseUrl}/images/back.webp`, number: 1},
      { front: `${BaseUrl}/images/card3.jpg`, back: `${BaseUrl}/images/back.webp`, number: 2},
      { front: `${BaseUrl}/images/card4.jpg`, back: `${BaseUrl}/images/back.webp`, number: 3},
      { front: `${BaseUrl}/images/card5.jpg`, back: `${BaseUrl}/images/back.webp`, number: 4},
      { front: `${BaseUrl}/images/card6.jpg`, back: `${BaseUrl}/images/back.webp`, number: 5},
      { front: `${BaseUrl}/images/card7.jpg`, back: `${BaseUrl}/images/back.webp`, number: 6},
      { front: `${BaseUrl}/images/card8.jpg`, back: `${BaseUrl}/images/back.webp`, number: 7},
      { front: `${BaseUrl}/images/card9.jpg`, back: `${BaseUrl}/images/back.webp`, number: 8},
      { front: `${BaseUrl}/images/card10.jpg`, back: `${BaseUrl}/images/back.webp`, number: 9},
      { front: `${BaseUrl}/images/card11.jpg`, back: `${BaseUrl}/images/back.webp`, number: 10},
      { front: `${BaseUrl}/images/card12.jpg`, back: `${BaseUrl}/images/back.webp`, number: 11},
      { front: `${BaseUrl}/images/card13.jpg`, back: `${BaseUrl}/images/back.webp`, number: 12},
      { front: `${BaseUrl}/images/card14.jpg`, back: `${BaseUrl}/images/back.webp`, number: 13},
      { front: `${BaseUrl}/images/card15.jpg`, back: `${BaseUrl}/images/back.webp`, number: 14},
      { front: `${BaseUrl}/images/card16.jpg`, back: `${BaseUrl}/images/back.webp`, number: 15},
      { front: `${BaseUrl}/images/card17.jpg`, back: `${BaseUrl}/images/back.webp`, number: 16},
      { front: `${BaseUrl}/images/card18.jpg`, back: `${BaseUrl}/images/back.webp`, number: 17},
      { front: `${BaseUrl}/images/card19.jpg`, back: `${BaseUrl}/images/back.webp`, number: 18},
      { front: `${BaseUrl}/images/card20.jpg`, back: `${BaseUrl}/images/back.webp`, number: 19},
      { front: `${BaseUrl}/images/card21.jpg`, back: `${BaseUrl}/images/back.webp`, number: 20},
      { front: `${BaseUrl}/images/card22.jpg`, back: `${BaseUrl}/images/back.webp`, number: 21},
      { front: `${BaseUrl}/images/card23.jpg`, back: `${BaseUrl}/images/back.webp`, number: 22},
      { front: `${BaseUrl}/images/card24.jpg`, back: `${BaseUrl}/images/back.webp`, number: 23},
      { front: `${BaseUrl}/images/card25.jpg`, back: `${BaseUrl}/images/back.webp`, number: 24},
      { front: `${BaseUrl}/images/card26.jpg`, back: `${BaseUrl}/images/back.webp`, number: 25},
      { front: `${BaseUrl}/images/card27.jpg`, back: `${BaseUrl}/images/back.webp`, number: 26},
      { front: `${BaseUrl}/images/card28.jpg`, back: `${BaseUrl}/images/back.webp`, number: 27},
      { front: `${BaseUrl}/images/card29.jpg`, back: `${BaseUrl}/images/back.webp`, number: 28},
      { front: `${BaseUrl}/images/card30.jpg`, back: `${BaseUrl}/images/back.webp`, number: 29},
      { front: `${BaseUrl}/images/card31.jpg`, back: `${BaseUrl}/images/back.webp`, number: 30},
      { front: `${BaseUrl}/images/card32.jpg`, back: `${BaseUrl}/images/back.webp`, number: 31},
      { front: `${BaseUrl}/images/card33.jpg`, back: `${BaseUrl}/images/back.webp`, number: 32},
      { front: `${BaseUrl}/images/card34.jpg`, back: `${BaseUrl}/images/back.webp`, number: 33},
      { front: `${BaseUrl}/images/card35.jpg`, back: `${BaseUrl}/images/back.webp`, number: 34},
      { front: `${BaseUrl}/images/card36.jpg`, back: `${BaseUrl}/images/back.webp`, number: 35},
      { front: `${BaseUrl}/images/card37.jpg`, back: `${BaseUrl}/images/back.webp`, number: 36},
      { front: `${BaseUrl}/images/card38.jpg`, back: `${BaseUrl}/images/back.webp`, number: 37},
      { front: `${BaseUrl}/images/card39.jpg`, back: `${BaseUrl}/images/back.webp`, number: 38},
      { front: `${BaseUrl}/images/card40.jpg`, back: `${BaseUrl}/images/back.webp`, number: 39},
      { front: `${BaseUrl}/images/card41.jpg`, back: `${BaseUrl}/images/back.webp`, number: 40},
      { front: `${BaseUrl}/images/card42.jpg`, back: `${BaseUrl}/images/back.webp`, number: 41},
      { front: `${BaseUrl}/images/card43.jpg`, back: `${BaseUrl}/images/back.webp`, number: 42},
      { front: `${BaseUrl}/images/card44.jpg`, back: `${BaseUrl}/images/back.webp`, number: 43},
      { front: `${BaseUrl}/images/card45.jpg`, back: `${BaseUrl}/images/back.webp`, number: 44},
      { front: `${BaseUrl}/images/card46.jpg`, back: `${BaseUrl}/images/back.webp`, number: 45},
      { front: `${BaseUrl}/images/card47.jpg`, back: `${BaseUrl}/images/back.webp`, number: 46},
      { front: `${BaseUrl}/images/card48.jpg`, back: `${BaseUrl}/images/back.webp`, number: 47},
      { front: `${BaseUrl}/images/card49.jpg`, back: `${BaseUrl}/images/back.webp`, number: 48},
      { front: `${BaseUrl}/images/card50.jpg`, back: `${BaseUrl}/images/back.webp`, number: 49},
      { front: `${BaseUrl}/images/card51.jpg`, back: `${BaseUrl}/images/back.webp`, number: 50},
      { front: `${BaseUrl}/images/card52.jpg`, back: `${BaseUrl}/images/back.webp`, number: 51},
      { front: `${BaseUrl}/images/card53.jpg`, back: `${BaseUrl}/images/back.webp`, number: 52},
      { front: `${BaseUrl}/images/card54.jpg`, back: `${BaseUrl}/images/back.webp`, number: 53},
      { front: `${BaseUrl}/images/card55.jpg`, back: `${BaseUrl}/images/back.webp`, number: 54},
      { front: `${BaseUrl}/images/card56.jpg`, back: `${BaseUrl}/images/back.webp`, number: 55},
      { front: `${BaseUrl}/images/card57.jpg`, back: `${BaseUrl}/images/back.webp`, number: 56},
      { front: `${BaseUrl}/images/card58.jpg`, back: `${BaseUrl}/images/back.webp`, number: 57},
      { front: `${BaseUrl}/images/card59.jpg`, back: `${BaseUrl}/images/back.webp`, number: 58},
      { front: `${BaseUrl}/images/card60.jpg`, back: `${BaseUrl}/images/back.webp`, number: 59},
      { front: `${BaseUrl}/images/card61.jpg`, back: `${BaseUrl}/images/back.webp`, number: 60},
      { front: `${BaseUrl}/images/card62.jpg`, back: `${BaseUrl}/images/back.webp`, number: 61},
      { front: `${BaseUrl}/images/card63.jpg`, back: `${BaseUrl}/images/back.webp`, number: 62},
      { front: `${BaseUrl}/images/card64.jpg`, back: `${BaseUrl}/images/back.webp`, number: 63},
      { front: `${BaseUrl}/images/card65.jpg`, back: `${BaseUrl}/images/back.webp`, number: 64},
      { front: `${BaseUrl}/images/card66.jpg`, back: `${BaseUrl}/images/back.webp`, number: 65},
      { front: `${BaseUrl}/images/card67.jpg`, back: `${BaseUrl}/images/back.webp`, number: 66},
      { front: `${BaseUrl}/images/card68.jpg`, back: `${BaseUrl}/images/back.webp`, number: 67},
      { front: `${BaseUrl}/images/card69.jpg`, back: `${BaseUrl}/images/back.webp`, number: 68},
      { front: `${BaseUrl}/images/card70.jpg`, back: `${BaseUrl}/images/back.webp`, number: 69},
      { front: `${BaseUrl}/images/card71.jpg`, back: `${BaseUrl}/images/back.webp`, number: 70},
      { front: `${BaseUrl}/images/card72.jpg`, back: `${BaseUrl}/images/back.webp`, number: 71},
      { front: `${BaseUrl}/images/card73.jpg`, back: `${BaseUrl}/images/back.webp`, number: 72},
      { front: `${BaseUrl}/images/card74.jpg`, back: `${BaseUrl}/images/back.webp`, number: 73},
      { front: `${BaseUrl}/images/card75.jpg`, back: `${BaseUrl}/images/back.webp`, number: 74},
      { front: `${BaseUrl}/images/card76.jpg`, back: `${BaseUrl}/images/back.webp`, number: 75},
      { front: `${BaseUrl}/images/card77.jpg`, back: `${BaseUrl}/images/back.webp`, number: 76},
      { front: `${BaseUrl}/images/card78.jpg`, back: `${BaseUrl}/images/back.webp`, number: 77},
    ]);

    const count = useRef(0);
    const groups = useRef([]);

    function swapHandle(){
      if(!canFlip && groups.current.length != 3){
        const swapButton = document.getElementById('swap_button')
        swapButton.style.backgroundColor = "green";
        swapButton.style.color = "white";
        swapButton.innerText = "Swap Done";
        for (let i = cards.current.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); 
          [cards.current[i], cards.current[j]] = [cards.current[j], cards.current[i]]; 
        }
        setCanFlip(true);
      }
    }

    function handleNavigate(){
      navigate("/Tarot/result",{state:{
        group_card:groups.current,
      }})
    }

    useEffect(()=>{
      const scrollContainer = document.querySelector(".tarot-container");
      const card_groups = document.getElementsByClassName('tarot-card');
      const resultButton = document.getElementById('result_button')

      for(let i = 0; i < card_groups.length; i++){
          card_groups[i].onmouseover = () => {
            card_groups[i].classList.add('choose_card');
          }
          card_groups[i].onmouseout = () => {
            card_groups[i].classList.remove('choose_card');
          }
          card_groups[i].onclick = () => {
            if(canFlip){
              count.current++;
              pick_done(count.current, i);
            }
          }
      }




      scrollContainer.addEventListener("wheel", (event) => {
          event.preventDefault();
          scrollContainer.scrollBy({
              left: event.deltaY * 3, // Di chuyển theo chiều ngang
              behavior: "smooth", // Hiệu ứng cuộn mượt
          });
      });


  
      
      function pick_done(times, stt){
        if(times <= 3){
          groups.current.push(cards.current[stt].number);
        }
        if(times == 3){
          setTimeout(()=>{
            setCanFlip(false);
            resultButton.style.display = 'block';
            resultButton.style.opacity = '1';
          },200)
        }
      }

    },[canFlip])
    

    return (
      <div className="tarot-wrapper">
        <div className="tarot-container">
          {cards.current.map((card, index) => (
            <TarotCard key={index} frontImage={card.front} backImage={card.back} condit={canFlip}/>
          ))}
        </div>
        <div className="button_feature">
          <button onClick={swapHandle} id="swap_button">Swap Start</button>
          <button onClick={handleNavigate}id="result_button">result Check</button>
        </div>
      </div>
    );
  };
  
  export default TarotReading;
  