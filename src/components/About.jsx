import { Title } from './Title';
import about from '/src/images/about.jpeg'


export const About = () => {
  return (
    <section className="section" id="about">

      <Title title={"about"} subtitle={"us"} />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>historia de la carrera</h3>
          <p>
            La carrera de Ingeniería de Sistemas Computacionales fue la primera carrera aprobada por el Ministerio de Educación en la naciente Facultad de Ingenierías y Arquitectura del campus La Paz de la Universidad Privada Boliviana. El primer graduado de la carrera, Álvaro Bilbao la Vieja, se graduó por excelencia en agosto del 2015.
          </p>
          <p>
            En 2018 comenzamos a trabajar con una nueva malla moderna y adecuada para las necesidades del mercado laboral del desarrollo de software, con materias específicas a esta área que no existen en otras universidades del medio, como Patrones de Diseño y Gestión de proyectos informáticos.
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
};