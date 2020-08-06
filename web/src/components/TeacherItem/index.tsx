import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/59394133?s=460&u=f9e800e9b23e771907021f5cf4ef42e8310cd789&v=4" alt="Maycon Santos" />
                <div>
                    <strong>Maycon Santos</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Professor de física, é isso aí.
                <br />
                <br />
                É isso ai
        </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;