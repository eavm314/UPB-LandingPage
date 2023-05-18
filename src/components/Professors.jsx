import { Title } from './Title'
import { ProfessorCard } from './ProfessorCard'

import { tours } from '../data/data'

export const Professors = () => {
    return (
        <section className="section" id="tours">
        <Title title={"our"} subtitle={"professors"}/>

        <div className="section-center featured-center">
          {
            tours.map((tour) =>
              <ProfessorCard {...tour} key={tour.id}/>
            )
          }
        </div>
      </section>
    )
};