import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './CreateUser';
import UserView from './UserView';
import UserEdit from './UserEdit';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <div className="container-fluid">          
        <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/users" element={<Users />} />
         <Route path="/user-create" element={<CreateUser />} />
         <Route path="/user-view/:id" element={<UserView />} />
         <Route path="/user-edit/:id" element={<UserEdit />} />
         {/* /user-view/1 */}
         {/* /user-view/2 */}
         {/* /user-view/abc */}     
        </Routes>
        </div>        
      </div>
      </div>
    </div>    
    </BrowserRouter>
  );
}

export default App;
