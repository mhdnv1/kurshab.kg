import React from 'react';
import './contacts.scss'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <h1 className="text-center">Наши реквизиты</h1>
                <div className="contacts__blog">
                    <ul>
                        <li>Общество с ограниченной ответственностью
                            «Kurshab.kg»</li> <br/>
                        <li>Телефон:
                            +7 (495) 970-15-00
                            8 (800) 700-15-00</li> <br/>
                        <li>E-mail:info@santehnika-online.ru</li><br/>
                  
                        <li>Юридический и фактический адрес:
                            117638, г. Москва,
                            ул. Одесская, д. 2, пом. II,
                            ком. 14, эт. 10</li> <br/>
                        <li>ИНН: 5003109855
                            КПП: 772701001
                            ОГРН: 1145003001637</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
