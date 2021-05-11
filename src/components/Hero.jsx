import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Heart from './Heart';

function mapStateToProps(state) {
    return {
        logoP: state.logos,
        menu: state.menu,
        isAnimated: state.issAnimated,
        /* Animated: state.animated, */
        display: state.display,
    }
}

class Hero extends Component {
    renderHeart() {
        const hearts = new Array(80).fill({})
        return (
            hearts.map((index) => {
                const styleRandom = {
                    left: Math.floor((Math.random() * (window.innerWidth - 100))) + 0 + "px",
                    animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + "ms"
                }
                return(
                    <Heart /* key={index} */ style={styleRandom}/>
                )
            })
        )
    }
    render() {
        return (
            <section id="portada" className={`portada background ${this.props.isAnimated}`}>

                <header id="header" className="header">

                    
                    {this.props.logoP.map((item/* , index */) => {
                        return(
                            <TransitionGroup>
                            <CSSTransition
                                /* key={item.image} */
                                classNames="fade"
                                /* transitionName="flicker" */
                                timeout={{enter: 400, exit: 0}}
                            >
                                <figure className="logotipo" /* key={index}  */>
                                    <img src={item.image} alt={item.alt} /* key={item.image} *//>
                                </figure>

                            </CSSTransition>
                            </TransitionGroup>
                        )
                    })}
                    
                    
                    
                    <span className="burguer-button icon-menu" id="burguer-button"></span>

                    <nav className="menu" id="menu">
                        <ul>
                            {this.props.menu.map((item/* , index */) => {
                                return (
                                    <li /* key={item.title} */>
                                        <a href={item.href} /* key={index}  */> {item.title} </a>
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

                {
                    this.props.isAnimated &&
                    this.renderHeart()
                }

            </section>
        )
    }
}

export default connect(mapStateToProps)(Hero);