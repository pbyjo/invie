import React, { Component } from 'react';

class Guitarras extends Component {
    render() {
        return (
            <section id="guitarras" className="guitarras">
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
                                <img className="guitarra-image" src={guitarra.image}  alt={guitarra.alt}/>
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
            </section>
        )
    }
}

export default Guitarras;