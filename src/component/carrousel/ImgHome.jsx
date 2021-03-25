import React,{useState} from 'react';
import i1 from '../pictures/img1.png';
import i2 from '../pictures/img2.png';
import i3 from '../pictures/img3.png';
import i4 from '../pictures/imgCompost.jpg';

const ImgHome = ({src}) => {
    const [slide,setSlide]= useState([i1,i2,i3,i4])
    const [Currentvalue, setCurrentvalue] = useState(3);
    setTimeout(()=>{
        next()
     },5000)
     const next=()=>{
         if(Currentvalue==slide.length-1){
            setCurrentvalue(0)
         }
         else{
            setCurrentvalue(Currentvalue+1)
         }
            }
    return (
        <div>
            
            <div className="slider">
                <img src={slide[Currentvalue]} 
                className="slide"
                alt="slideHome" />
            </div>
        </div>
    )
}
export default ImgHome
