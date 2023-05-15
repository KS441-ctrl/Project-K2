import React,{useState}from 'react'
import '../Components/css/slider.css'

 function Slider() {
  const [sliderPosition, ] = useState(0);
  const rigOptions = [
    { id: 1, name: "Option 1" },
   
  ];
  const [selectedRigId, setSelectedRigId] = useState(1);
  const handleRigChange = (id) => {
    setSelectedRigId(id);
  };
    
  return (
    <div className='slide_container'>

      <div className='slide_container__inner' style={{ left: `${sliderPosition}%` }}/>
      <div>
        {rigOptions.map((rig) => (
        <label key={rig.id} className='slider_label'>
          <input
            type='radio'
            name='rig'
            checked={selectedRigId === rig.id}
            onChange={() => handleRigChange(rig.id)}
          />
          <span className='slider_indicator' />
        </label>
        ))}
      </div>

    </div>
  );
}
export default Slider;