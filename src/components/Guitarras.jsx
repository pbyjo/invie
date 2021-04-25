import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function mapStateToProps(state) {
    return {
        guitarras: state.guitarras,
        videoU: state.videoP,
        waves: state.waves,
    }
}

class Guitarras extends Component {
    render() {
        return (
            <section id="guitarras" className="guitarras">

                <section className="wavetop">
                    <div className="wave circulo a"></div>
                </section>

                <h2>Nuestras guitarras</h2>

                <div className="video-demo-contenedor">
                    <div className="video-demo">
                        <div className="video-responsive-contenedor">
                                <iframe className="video-responsive-src" src={this.props.videoU} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                {
                    this.props.guitarras.map((guitarra, index) => {
                        return(
                            <article className="guitarra" key={index}>

                                <TransitionGroup>
                                <CSSTransition
                                    key={guitarra.image}
                                    classNames="flicker"
                                    /* transitionName="flicker" */
                                    timeout={{enter: 500, exit: 500}}
                                    >
                                    <img 
                                        className="guitarra-image" 
                                        key={guitarra.image} 
                                        src={guitarra.image} 
                                        alt={guitarra.alt} 
                                    />
                                </CSSTransition>
                                </TransitionGroup>

                                <TransitionGroup>
                                <CSSTransition
                                    key={guitarra.name}
                                    classNames="fade"
                                    timeout={{enter: 500, exit: 0}}
                                >
                                    <div className="contenedor-guitarra" key={guitarra.name}>
                                        <h3 className="guitarra-name"> {guitarra.name} </h3>
                                        <ol>
                                            {
                                                guitarra.features.map((feature, index) => {
                                                    return(
                                                        <li key={index}> {feature} </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </CSSTransition>
                                </TransitionGroup>

                            </article>
                        )
                    })
                }

                <section className="wavebot">

                    <div className="wave circulo c"></div>

                </section>
                
            </section>
        )
    }
}

export default connect(mapStateToProps)(Guitarras);