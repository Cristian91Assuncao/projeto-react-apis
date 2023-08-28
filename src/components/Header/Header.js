import React, { useContext } from 'react'
import {HeaderStyle, HeaderStyle2} from './HeaderStyle';
import { Button } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokedexPage, goToPokemonsListPage } from '../../routes/coordinator';
import logo from "../../assets/logo.png"
// import GlobalContext from '../../context/GlobalContext';

function Header() {

    
  // const context = useContext(GlobalContext);
    
    const navigate = useNavigate()

    const location = useLocation()

    const renderHeader = () => {
      switch (location.pathname) {
        case "/":
          return (
            <HeaderStyle>
                <img src={logo} alt="" />
                <Button minW="150px" variant="header" onClick={()=>goToPokedexPage(navigate)} >Pokédex</Button>
              </HeaderStyle>
          );
        case "/pokedexPage":
          return (
            <HeaderStyle2>                
                  <div>
                  <Button variant="link" onClick={()=>goToPokemonsListPage(navigate)} >Voltar a lista</Button>
                  </div>
                  <div>
                    <img src={logo} alt="" />
                  </div>                
              </HeaderStyle2>
          );
        default:
          return (
            <HeaderStyle>                
                  <div>
                  <Button variant="link" onClick={()=>goToPokemonsListPage(navigate)} >Voltar a lista</Button>                
                  </div>
                  <img src={logo} alt="" />
                  <Button minW="150px" variant="headerDetail" >ADD ou EXCLUI</Button>                
              </HeaderStyle>
          );
      }
    };

    return (
        <>
        {renderHeader()}
          {/* {location.pathname === '/goToPokedexPage' &&
            <HeaderStyle>
              <div>
                <div>
                <Button variant="link" onClick={()=>goToPokemonsListPage(navigate)} >Voltar a lista</Button>
                </div>
                <div>
                  <img src={logo} alt="" />
                </div>
              </div>
            </HeaderStyle>
          }

          {location.pathname === '/' ?

            <HeaderStyle>
              <img src={logo} alt="" />
              <Button variant="header" onClick={()=>goToPokedexPage(navigate)} >Pokédex</Button>
            </HeaderStyle>

            :

            location.pathname.includes('/goToPokemondetailPage') &&
            <HeaderStyle>
              <div>
                <div>
                <Button variant="link" onClick={()=>goToPokemonsListPage(navigate)} >Voltar a lista</Button>                
                </div>
                <img src={logo} alt="" />
                <button>ADD ou EXCLUI</button>
              </div>
            </HeaderStyle>

          } */}


{/* <HeaderStyle>
<Button variant="link" onClick={()=>goToPokemonsListPage(navigate)} >Voltar a lista</Button>
<img src={logo} alt="" />
<Button variant="header" onClick={()=>goToPokedexPage(navigate)} >Pokédex</Button>
</HeaderStyle> */}
        </>


    );
}

export default Header;