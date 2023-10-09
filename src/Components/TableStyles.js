import styled from 'styled-components';


export const Styles = styled.div`
  .table {
    border: 1px solid #ddd;
 
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
 
    .th{
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #adb5bd;
      color: black;
      
      text-align: center;
      overflow: hidden;
 
      :last-child {
        border-right: 0;
      }
    }

    .td {
        padding: 5px;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background-color: white;
        color: black;
        text-align: left;
        overflow: hidden;
   
        :last-child {
          border-right: 0;
        }
      }
 
    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
 
      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .header1 {
        position: sticky;
        width: fit-content;
        top: 60px;
        box-shadow: 0px 3px 3px #ccc;
        z-index: 2;
      }
 
      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }
 
      .body {
        position: relative;
        z-index: 0;
      }
 
      [data-sticky-td] {
        position: sticky;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;

export const PreStyles = styled.div`
  .table {
    border: 1px solid #ddd;

 
    .tr {
      
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
 
    .th{
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #adb5bd;
      color: black;
      
      text-align: center;
      overflow: hidden;
 
      :last-child {
        border-right: 0;
      }
    }

    .td {
        padding: 5px;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background-color: white;
        color: black;
        text-align: left;
        overflow: hidden;
   
        :last-child {
          border-right: 0;
        }
      }
 
    &.sticky {
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
 
      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
        
      }

      .header1 {
        position: sticky;
        width: fit-content;
        top: 60px;
        box-shadow: 0px 3px 3px #ccc;
        z-index: 2;
      }
 
      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }
 
      .body {
        position: relative;
        z-index: 0;
      }
 
      [data-sticky-td] {
        position: sticky;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;