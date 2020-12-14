import React from 'react';
import { lightTheme, darkTheme } from './../theme';
import DataTable , { createTheme }  from 'react-data-table-component';
import { useDarkMode } from './../useDarkMode';
import { createGlobalStyle } from 'styled-components';

// const data = [{ id: 1, title: 'Ramesh', year: '1982' },{ id: 2, title: 'Ramesh', year: '1982' },{ id: 3, title: 'Ramesh', year: '1982' },{ id: 4, title: 'Ramesh', year: '1982' },{ id: 5, title: 'Ramesh', year: '1982' },{ id: 6, title: 'Ramesh', year: '1982' },{ id: 7, title: 'Ramesh', year: '1982' },{ id: 8, title: 'Ramesh', year: '1982' },{ id: 9, title: 'Ramesh', year: '1982' }];
const columns = [
  {
    name: 'RIOfferingId',
    selector: 'ReservedInstancesOfferingId',
    sortable: true,
  },
  {
    name: 'CurrencyCode',
    selector: 'CurrencyCode',
    sortable: true,
  },
  {
    name: 'Duration',
    selector: 'Duration',
    sortable: true,
  },
  {
    name: 'UsagePrice',
    selector: 'UsagePrice',
    sortable: true,
    right: true,
  },
  {
    name: 'InstanceType',
    selector: 'InstanceType',
    sortable: true,
    right: true,
  },
  {
    name: 'Marketplace',
    selector: 'Marketplace',
    sortable: true,
    right: true,
  },
  {
    name: 'InstanceTenancy',
    selector: 'InstanceTenancy',
    sortable: true,
    right: true,
  },
  {
    name: 'FixedPrice',
    selector: 'FixedPrice',
    sortable: true,
    right: true,
  },
  {
    name: 'ProductDescription',
    selector: 'ProductDescription',
    sortable: true,
    right: true,
  },
  {
    name: 'OfferingType',
    selector: 'OfferingType',
    sortable: true,
    right: true,
  },
  {
    name: 'Scope',
    selector: 'Scope',
    sortable: true,
    right: true,
  }
];



class Home extends React.Component{

  state={themeMode:null}
  constructor(props) {
     super(props);
     this.state = {
      ri: [],
      loading:true
    }
     this.state.themeMode = this.props.theme === 'dark' ?  "dark":"default";
  }

  async getUsersData(){
    fetch('http://localhost:5000/ri-analyser/api/v1/getri',{
    "method": "GET"
    }).then(res => res.json())
       .then((data) => {
         this.setState({ ri: data.ReservedInstancesOfferings })
    })
    .catch(err => {
            console.log(err);
            alert("Error: "+JSON.stringify(err) )

    })
  }

  componentDidMount(){
    this.getUsersData()
  }

  updateColor=()=>{

    let para = document.querySelector('rdt_TableRow');
    let compStyles = window.getComputedStyle(para);
    compStyles.setProperty("background-color", "yellow");

  }



  handleClick=(mode)=>{
    this.state.themeMode = this.props.theme === 'dark' ?  "dark":"default";
    alert(this.state.themeMode)
  }


  render(){
    return (
          <DataTable
            title=" RI"
            data={this.state.ri}
            columns={columns}
            />
    )
  }
}
export default Home;
