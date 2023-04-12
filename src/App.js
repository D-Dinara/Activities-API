import './App.css';
import { useState, useEffect } from 'react';
import video from './cover-video.mp4'

function App() {
  const [activity,setActivity] = useState('');

  useEffect(() => {
    getActivity ();
}, [])

  const getActivity = async () => {
  const response = await fetch (`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setActivity(data.activity);
} 

  return (
    <div className="App">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4"/>
      </video>
      <div className='container'>
        <h1>Get some ideas for activities if you are bored!</h1>
        
        <div className='activity-container'>
          <p className='text'>Try this: </p>
          <p className='activity'>{activity}</p>
          <p className='text'>or</p>
          <button onClick={getActivity}>Click here to get a new activity!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
