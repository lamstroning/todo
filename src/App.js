import './style/component/_app.scss';
import RightPanel from './components/RightPanel/RightPanel';
import PageBody from './components/PageBody/PageBody';

function App() {
  return (
        <div className='page'>
          <div className='page__panel'>
            <RightPanel/>
          </div>
          <div className='page__body'>
              <PageBody/>
          </div>
        </div>
  );
}

export default App;
