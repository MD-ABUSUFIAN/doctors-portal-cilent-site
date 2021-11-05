
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';

import Appointment from './Pages/Appointment/Appointment/Appointment/Appointment';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
           
           <Switch>
             <Route exact path='/'>
               <Home></Home>
             </Route>
             <Route  path='/home'>
               <Home></Home>
             </Route>
             <Route path='/appointment'>
               <Appointment></Appointment>
             </Route>
             <Route  path='/login'>
               <Login></Login>
             </Route>
             <Route  path='/register'>
               <Register></Register>
             </Route>
 
           </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
