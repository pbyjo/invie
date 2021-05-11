import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function mapStateToProps(state) {
    return {
        logoF: state.logosF,
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="contacto">

                {this.props.logoF.map((item/* , index */) => {
                    return (
                        <TransitionGroup>
                        <CSSTransition
                            /* key={item.image} */
                            classNames="flicker"
                            /* transitionName="flicker" */
                            timeout={{enter: 300, exit: 0}}
                        >
                            <img src={item.image} alt={item.alt} /* key={item.image} *//>
                        </CSSTransition>
                        </TransitionGroup>
                    )
                })}

                    <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
                    <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
                </div>
                <form className="formulario">
                    <div className="col1">
                        <label htmlFor="nombre">Nombre</label>
                            <input type="text" required id="nombre" name="nombre"/>
                        <label htmlFor="email">E-mail</label>
                            <input type="email" required id="email" name="email"/>
                        <div className="sexo">
                            <label htmlFor="mujer">
                                <input type="radio" id="mujer" defaultChecked name="sexo" value="mujer" /> 
                            </label>
                            <label htmlFor="hombre">
                                <input type="radio" id="hombre" name="sexo" value="hombre" />
                            </label>
                        </div>
                        <div className="intereses">
                            <label htmlFor="cotizacion">
                                <input type="checkbox" defaultChecked id="cotizacion" name="intereses" value="cotizacion" />
                            </label>
                            <label htmlFor="reclamos">
                                <input type="checkbox" id="reclamos" name="intereses" value="reclamos" />
                            </label>
                            <label htmlFor="comentarios">
                                <input type="checkbox" id="comentarios" name="intereses" value="comantarios" />
                            </label>
                            <label htmlFor="otros">
                                <input type="checkbox" id="otros" name="intereses" value="otros" />
                            </label>
                        </div>
                    </div>
                    <div className="col2">
                        <label htmlFor="comentarios">Comentarios</label>
                        <textarea name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
                        <input type="submit" value="Enviar" className="button"/>
                    </div>
                </form>
            </footer>
        )
    }
}

export default connect(mapStateToProps)(Footer);