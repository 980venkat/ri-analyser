import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;

  }

  button:focus {outline:0;}

  a {
    color: ${({ theme }) => theme.text};
  }


  .navbar {
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    top: 0;
    width: 100%;
    overflow: hidden;

  }

  .navbara {
    float: left;
    color: ${({ theme }) => theme.text};
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

 .bodystyle{
   border: 5px solid red;
 }

.rdt_TableRow{
  background-color:  ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

}
.rdt_TableHeadRow{
  background-color:  ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};


}
.rdt_TableHeader{
  background-color:  ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}


.rdt_TableCol{
  color: ${({ theme }) => theme.text};
}
`;
