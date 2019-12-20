import React, { Component } from 'react'
import db from '../config';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

export class AddEntry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titulo: '',
            textoEntrada: '',
            redirect: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { titulo, textoEntrada } = this.state;

        //Valida que haya algo aunque sea en los campos
        if (titulo.length > 3 && textoEntrada.length > 3) {
            db.firestore().collection('entradas').add({
                titulo,
                textoEntrada
            })
                .then(() => {
                    Swal.fire(
                        'Exito!',
                        'Se ha añadido la entrada con exito!',
                        'success'
                    )

                    this.setState({
                        redirect: true
                    });
                })
                .catch(() => {
                    Swal.fire(
                        'Oops',
                        'Ha habido un error, intentelo de nuevo',
                        'error'
                    )
                })
        } else {
            Swal.fire(
                'Oops',
                'Ha habido un error, intente ingresar mas de 3 digitos en el titulo y en la entrada',
                'error'
            )
        }

    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }

        return (
            <form className="container mt-4">

                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" className="form-control" id="titulo" aria-describedby="tituloHelp" placeholder="Ingrese un titulo" onChange={this.handleInput} name="titulo" />
                    <small id="tituloHelp" className="form-text text-muted">Titulo que le queres dar a la entrada.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea className="form-control" id="contenido" placeholder="Contenido de su entrada..." rows="6" onChange={this.handleInput} name="textoEntrada" />
                </div>

                <button type="submit" className="btn btn-primary float-right" onClick={this.handleSubmit}>Publicar</button>
            </form>
        )
    }
}

export default AddEntry
