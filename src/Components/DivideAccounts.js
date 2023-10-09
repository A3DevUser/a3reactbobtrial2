import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation,useHistory } from "react-router-dom";
import DividePartySheets from './DividePartySheets';
import Navbar from './Navbar';

const DivideAccounts = () => {

    const location = useLocation();
    const history = useHistory();

    const[accounts,setAccounts] = useState(location.state.accountsData);
    const[accountData, setAccountData] = useState([]);
    const[accountsSize,setAccountsSize] = useState();
    const[count,setCount] = useState(0);
    const[finalAccountData,setFinalAccountData] = useState([]);
    const[partySheet,setPartySheet] = useState([]);
    const[partyDone,setPartyDone] = useState(false);
    const[auditId,setAuditId] = useState();
    const[scheme,setScheme] = useState();
    const[tests,setTests] = useState([]);
    const[sheetLimit,setSheetLimit] = useState(10)
    const[sheetData,setSheetData] = useState(false);
    
    const[generatedSheetDetails,setGeneratedSheetDetails] = useState([]);

    var accountSheetDetails = [];
    var sheetCounter = [];

    const setAccountsId = () => {
        setAccounts(location.state.accountsData);
        setAuditId(location.state.audId)
        setScheme(location.state.schemeCode)
         }


    const setAccountsData = () => {
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getAccountsByIds?accountId=${accounts}`)
                .then(function(response){
                    setFinalAccountData(response.data)
                })
        setAccountsSize(accounts.length)                
         }

    const setTestData = () => {
        axios.get( `https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/TestBySchemeCode?schemeCode=${scheme}`)
            .then(response => response.json())
            .then(allTest => setTests(allTest))
    }

    const setSheets = () => {
        var len = accounts.length
        if(len <= sheetLimit)
        {
            sheetCounter.push(1)
            
        }
        else{
            var counter = 1;
        for(var i = 0; i <= len;i = i + sheetLimit)
        {
            if((i + sheetLimit) <= len)
            {
                sheetCounter.push(counter)
                counter = counter + 1;
            }
            else if((i + sheetLimit) > len)
            {
                sheetCounter.push(counter)
                
            }
        }
    }

        sheetCounter.map((sh) => {
            setGeneratedSheetDetails(generatedSheetDetails => [...generatedSheetDetails,sh])
        })
    }


    useEffect(() => {
        setAccountsId();
        if(accounts.length > 0){
        setSheets();
        setAccountsData();
        setTestData();
        }
    }, [accounts])


    useEffect(() => {        
        if(finalAccountData.length > 0 && tests.length > 0 && generatedSheetDetails.length > 0)
        {

            // setAccountsDetails(finalAccountData)
            // setTestDetails(tests)
            // setGeneratedSheetDetails(sheetCounter)

            history.push({ 
                pathname: '/PartySheets/1',
                state: {
                accountsData: `${finalAccountData}`,
                tests: `${tests}`,
                sheets: `${generatedSheetDetails}`,
                auditId :`${auditId}`,
                schemeCode:`${scheme}`}
            });
        }  
    },[tests])

    return (
        <>
            <p>Party Sheets Generated</p>
        </>
    )
}

export default DivideAccounts
