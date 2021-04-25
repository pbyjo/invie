import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function mapStateToProps(state) {
    return {
        logoP: state.logoHeader,
        menu: state.menu,
        isAnimated: state.issAnimated,
        /* Animated: state.animated, */
        display: state.display,
    }
}

class Hero extends Component {
    render() {
        return (
            <section id="portada" className={`portada background ${this.props.isAnimated}`}>

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

                <TransitionGroup>
                <CSSTransition
                    classNames="animationInOut"
                    timeout={{enter: 800, exit: 800}}
                >  

                        {/* !this.props.isAnimated && */}
                            <div className={`${this.props.display}`} key="portada">     
                                <h1 className="titulo">Guitarras <span>Invie</span> sibles</h1>
                                <h3 className="slogan-title">Sé la estrella de rock que siempre quisiste ser</h3>
                                <a className="button" href="#guitarras">Conoce más</a>
                            </div>

                </CSSTransition>
                </TransitionGroup>

            </section>
        )
    }
}

export default connect(mapStateToProps)(Hero);