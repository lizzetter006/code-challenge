import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap');
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    padding: 10px;
    margin: 0;
    font-size: 15px;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }

  &:root{
    --wrapper-padding: 25px;
    --color-textgrey: #565656;
    --color-white: #FFF;
  }

`
