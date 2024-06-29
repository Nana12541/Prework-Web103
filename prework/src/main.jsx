import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Add from './components/Add.jsx';
import Gallery from './components/Gallery.jsx';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import Detail from './components/Detail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index={true} element={<App />} />
            <Route index={false} path="/gallery" element={ <Gallery /> } />
          <Route index={false} path="/add" element={ <AddCreator /> } />
          <Route index={false} path="/edit" element={ <EditCreator /> } />
          <Route index={false} path="/detail/:id" element={ <Detail /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
