import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        logoP: state.logoHeader,
        menu: state.menu
    }
}

class Hero extends Component {
    render() {
        return (
            <section id="portada" className="portada background">

                <header id="header" className="header">

                    <figure className="logotipo">
                        <img src={this.props.logoP} alt="Invie logotipo"/>
                    </figure>
                    
                    <span className="burguer-button icon-menu" id="burguer-button"></span>

                    <nav className="menu" id="menu">
                        <ul>
                            {this.props.menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href}> {item.title} </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </header>

                <div className="contenedor">     
                    <h1 className="titulo">Guitarras <span>Invie</span> sibles</h1>
                    <h3 className="slogan-title">Sé la estrella de rock que siempre quisiste ser</h3>
                    <a className="button" href="#guitarras">Conoce mas</a>
                </div>

            </section>
        )
    }
}

export default connect(mapStateToProps)(Hero);