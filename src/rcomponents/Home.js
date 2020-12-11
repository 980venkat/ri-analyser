import React from 'react';
import { lightTheme, darkTheme } from './../theme';
import DataTable , { createTheme }  from 'react-data-table-component';
import { useDarkMode } from './../useDarkMode';
import { createGlobalStyle } from 'styled-components';

const data = [{ id: 1, title: 'Ramesh', year: '1982' },{ id: 2, title: 'Ramesh', year: '1982' },{ id: 3, title: 'Ramesh', year: '1982' },{ id: 4, title: 'Ramesh', year: '1982' },{ id: 5, title: 'Ramesh', year: '1982' },{ id: 6, title: 'Ramesh', year: '1982' },{ id: 7, title: 'Ramesh', year: '1982' },{ id: 8, title: 'Ramesh', year: '1982' },{ id: 9, title: 'Ramesh', year: '1982' }];
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];



class Home extends React.Component{

  state={themeMode:null}
  constructor(props) {
     super(props);
     this.state.themeMode = this.props.theme === 'dark' ?  "dark":"default";
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
            title="Arnold Movies"
            columns={columns}
            data={data}
            />
    )
  }
}
export default Home;
