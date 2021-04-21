import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function mapStateToProps(state) {
    return {
        guitarras: state.guitarras,
        video: state.videoP,
        waves: state.waves,
    }
}

class Guitarras extends Component {
    render() {
        return (
            <section id="guitarras" className="guitarras">

                <section class="wavetop">
                    <div class="wave circulo a"></div>
                </section>

                <h2>Nuestras guitarras</h2>

                <div className="video-demo-contenedor">
                    <div className="video-demo">
                        <div className="video-responsive-contenedor">
                                <iframe className="video-responsive-src" src={this.props.video} frameBorder="0" allowFullScreen></iframe>
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
                                    timeout={{ enter: 300, exit: 300 }}
                                    >
                                    <img 
                                        className="guitarra-image" 
                                        key={guitarra.image} 
                                        src={guitarra.image} 
                                        alt={guitarra.alt} 
                                    />
                                </CSSTransition>
                                </TransitionGroup>
                                
                                <div className="contenedor-guitarra">
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
                            </article>
                        )
                    })
                }

                <section class="wavebot">

                    <div class="wave circulo c"></div>

                </section>
                
            </section>
        )
    }
}

export default connect(mapStateToProps)(Guitarras);