import React, {useState} from 'react';
import Container from "../Container";
import {HomeLink, LanguageList, LanguageWrapper, LogoWrapper, Wrapper} from "./style";
import {ReactComponent as GlobusIcon} from "../../assets/icons/globus.svg";
import {ReactComponent as DowArrow} from "../../assets/icons/down-arrow.svg";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {useTranslation} from "react-i18next";
import Text from "../Text";
import HomeIcon from '../../assets/icons/homeIcon.png'
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../store/languageSlice";
import FilterDropdown from "../FilterDropdown";
import useScreenSize from "../../hooks/useScreenSize";

const languagesList = [
    {id:1,name: 'UZ', code: 'uz'},
    {id:2,name: 'RU', code: 'ru'},
    {id:3,name: 'EN', code: 'en'},
]

const Navbar = () => {
    const { t,i18n } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation()?.pathname;
    const getLang = JSON.parse(localStorage.getItem('lang'));
    const initialLang = languagesList.find(item => item.code === getLang);
    const [languageModal,setLanguageModal]= useState(0);
    const [languageItem,setLanguageItem] =  useState(initialLang?initialLang:languagesList[0])
    const [searchTerm, setSearchTerm] = useState('');
    const {width} = useScreenSize()
    const countries = useSelector(store => store.lang.countries)
        .map(item =>{
            return {
                value: item.id,
                label: `${item.country}, ${item.capital}`
             }
        })


    const handleLang = (item) => {
        localStorage.setItem('lang',JSON.stringify(item.code))
        i18n.changeLanguage(item.code)
        dispatch(setLang(item.code))
        setLanguageItem(item);
        setLanguageModal(false);
    }
    const filteredItems = countries.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Wrapper>
                <div className={'justify-center'}>
                    <LogoWrapper >
                        <Logo/>
                    </LogoWrapper>
                    {location !== '/'
                        ? <HomeLink to={"/"}>
                            <img src={HomeIcon} alt={'home-icon'}/>
                            <Text size={width > 480 ? 24 : 18} color={'#000'} weight={'600'}>{t("home")}</Text>
                          </HomeLink>
                        :null
                    }
                </div>
                {location === '/' && width > 480 ? <div style={{marginLeft:30}}>
                    <FilterDropdown
                        options={filteredItems}
                        label={t("search")}
                        onChange={ev=>setSearchTerm(ev)}
                    />
                </div> : null}
                <LanguageWrapper onClick={()=>setLanguageModal(!languageModal)}>
                    <div><GlobusIcon/></div>
                    <Text color={'#000'}>{languageItem.name}</Text>
                    <div style={{marginTop:5}} ><DowArrow/></div>
                    {languageModal ? <LanguageList>
                        {languagesList.map(item=>(
                            <div
                                key={item.id}
                                style={{background: item.id === languageItem.id && '#f6f6f6'}}
                                onClick={()=>handleLang(item)}>
                                {item.name}
                            </div>
                        ))}
                    </LanguageList>:null}
                </LanguageWrapper>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

