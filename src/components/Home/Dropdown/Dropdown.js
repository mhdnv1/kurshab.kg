import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({status , categories , setStatus}) => {
    return (
        <Dropdown className="home__categoryes">
        <Dropdown.Toggle className="w-100" style={{ background: "#7FAD39", border: "none" }} id="dropdown-basic">
            {status}
        </Dropdown.Toggle>
        <Dropdown.Menu className="" >
            <Dropdown.Item onClick={() => { setStatus('1') }}>Все товары</Dropdown.Item>
            {
                categories && categories.map((item) => (
                    <Dropdown.Item key={item.id} onClick={() => { setStatus(item.id) }} >
                        {item.name}
                    </Dropdown.Item>
                ))
            }
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default DropdownComponent;
