import logo from './logo.svg';
import './App.css';
import Layout from "./layout/layout";
import Title from "./title/title";
function App() {
  return (
      <>
          <div >
              <Layout/>
              <div className='wrapper-square'>
                  <Title />
              </div>



          </div>


      </>

  );
}

export default App;
