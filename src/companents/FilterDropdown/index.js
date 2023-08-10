import React, { useState} from 'react';
import SearchIcon from '../../assets/icons/search.png'
import {Item, Options, OptionsWrapper, WrapSelector} from "./style";

const FilterDropdown = ({label, options, onChange, defVal, style}) => {
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{position: 'relative'}}>
            <WrapSelector
                style={style}
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                <input
                    placeholder={title ? title : defVal ? defVal : label}
                    value={title}
                    onChange={ev => {
                        setTitle(ev.target.value);
                        onChange(ev.target.value);
                    }}
                />
                <img src={SearchIcon} alt={'search'}/>
            </WrapSelector>
            <OptionsWrapper>
                <Options style={{display: isOpen ? 'block' : 'none'}}>
                    {options && options.length > 0 ? options.map((item, index) => {
                            return <Item
                                        key={index}
                                        to={`/country/${item.value}`}
                                        onClick={() => {
                                            setTitle(item.label)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {item.label}
                                 </Item>
                        }) :
                        <Item>No options</Item>}

                </Options>
            </OptionsWrapper>
        </div>
    );
};

export default FilterDropdown;
