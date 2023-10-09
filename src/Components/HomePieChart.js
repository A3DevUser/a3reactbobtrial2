import {React,useEffect,useState} from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
// import ProgressCard from './ProgressCard';


function HomePieChart(props) {

    const[userDetails,setUserDetails] = useState();
    const[isEmpty,setIsEmpty] = useState(false);
    const[name,setName] = useState([]);
    const[count,setCount] = useState([]);

    useEffect(() => {
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/UserDataByAuditId?auditId=${props.auditId}`)
          .then(function(response){
            setUserDetails(response.data); 
            if(response.data.length == 0)
            setIsEmpty(true)
          });
        },[])

        useEffect(() => {
            if(userDetails){
            userDetails.map((u,k) => {
                    setName(name => [...name,u[0]])
                    setCount(count => [...count,u[1]])
            })
            }
            },[userDetails])


    const options = {
        series: count,
        labels: name,
        plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360,
              expandOnClick: true,
              offsetX: 0,
              offsetY: 0,
              customScale: 1,
              dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
              }, 
              donut: {
                size: '80%',
                background: 'transparent',
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#04010a',
                    offsetY: -10,
                    formatter: function (val) {
                      return val
                    }
                  },
                  value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: '#04010a',
                    offsetY: 16,
                    formatter: function (val) {
                      return val
                    }
                  },
                  total: {
                    show: true,
                    showAlways: true,
                    label: 'Total Accounts',
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#04010a',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  }
                }
              },      
            }
          }
    };

    const series = count;

    return (
        <div className=''>
          <h1 className='mx-4 my-3'>Accounts Selected</h1>
           <Chart 
             options = {options}
             series = {series}
             type = "donut"
             width = "90%"
             height = {300}
         />
        {/* <ProgressCard auditId = {props.auditId}/> */}
        </div>
    )
}

export default HomePieChart


