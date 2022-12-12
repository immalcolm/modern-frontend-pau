//1. create data files shops.json // events.json -> place in public folder
//2. install bootstrap and import

import 'bootstrap/dist/css/bootstrap.min.css';
import MallDirectory from './MallDirectory';
import MallDirectoryMount from './MallDirectoryMount';
import MallDirectoryMountData from './MallDirectoryMountData';

function App() {
  return (
    <div className='container'>
      <MallDirectoryMountData/>
    </div>
  );
}

export default App;
