import './App.css';
import Navbar from './Components/Navbar';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeTable from './Components/HomeTable';
import PartySheetsInput from './Components/PartySheetsInput';
import DivideAccounts from './Components/DivideAccounts';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import RTable from './Components/RTable';
import Hometable2 from './Components/Hometable2';
import CompComponent from './Components/CompComponent';
// import DivideAccounysUpdated from './Components/DivideAccounysUpdated';

function App() {

  const[homeAccountsDetails,setHomeAccountsDetails] = useState([]);
  const[homeTestDetails,setHomeTestDetails] = useState([]);
  const[homeGeneratedSheetDetails,setHomeGeneratedSheetDetails] = useState([]);
 
  return (
    // <div className='land-main'>
    <>
    {/* <NavbarParty accountsDetails = {homeAccountsDetails} testDetails = {homeTestDetails} generatedSheetDetails = {homeGeneratedSheetDetails}/> */}
    <Router>
    {/* {homeAccountsDetails && <NavbarParty accountsDetails = {homeAccountsDetails} testDetails = {homeTestDetails} generatedSheetDetails = {homeGeneratedSheetDetails}/>}
    {!homeAccountsDetails && <HomeTable setHomeAccountsDetails = {setHomeAccountsDetails} setHomeTestDetails = {setHomeTestDetails} setHomeGeneratedSheetDetails = {setHomeGeneratedSheetDetails}/>}
     */}
    <div>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path = "/home">
          <HomeTable/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path = "/">
            {/* <Home/> */}
            {/* <HomeTable/> */}
            <LandingPage/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path = "/PartySheets/:id">
            <PartySheetsInput/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path = "/DivideAccounts">
            <DivideAccounts/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path= '/Dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path= './Component/RTable'>
          <RTable/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path= '/Component/Hometable2'>
          <Hometable2/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path= '/Component/CompComponent'>
          <CompComponent/>
        </Route>
      </Switch>
    </div>
   </Router>
  {/* </div> */}
  </>
  
  );
}

export default App;
