import React from 'react';
import './Curriculum.css'
function Curriculum(props){
    return(
        <div className='cur'>
            <h1>Curriculum Vitae</h1>
            <br/>
            <ul>
                Objetivo profesional
                <p>
                    Defines en pocas palabras a lo que te deidcas y tu objetivo como profesional en tu area.
                    Ejemplo:
                    Desempeñarme como programador de videojuegos y diseñador de entornos inmersivos
                </p>
            </ul>
            <ul>
                Perfil profesional
                <p>
                    Aqui hablad e tus años de experiencia y un resumen de lo que has hecho en el campo laboral.
                </p>
            </ul>
            <ul>
                Experiencia laboral
                <p>
                    Lista de empresas o los proyectos en los que has trabajando con una pequeña descripción y fecha de inciio, fin, o actualmente.
                </p>
            </ul>
            <ul>
                Formación académica
                <p>
                    Lista de tu historial academico si tienes diplomados o cursos, si estas cursando la carrera o la culminsate o si eres titulado, igual con fecha de incio, fin o actualmente
                </p>
            </ul>
        </div>
    )
}

export default Curriculum;