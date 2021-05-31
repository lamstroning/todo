import './style/component/_app.scss';
import RightPanel from './components/RightPanel/RightPanel';

function App() {
  return (
        <div className='page'>
          <div className='page__panel'>
            <RightPanel/>
          </div>
          <div className='page__body'>
            
          </div>
        </div>
  );
}

export default App;
