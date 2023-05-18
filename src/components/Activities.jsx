import { ActivityCard } from "./ActivityCard";
import { Title } from "./Title";
import { activities } from "../data/data";

export const Activities = () => {
    return (

        <section className="section services" id="services">
            <Title title={"our"} subtitle={"activities"}/>
            <div className="section-center services-center">
                {
                    activities.map((service) => 
                        <ActivityCard {...service} key={service.id}/>
                    )
                }
            </div>
        </section>
    )
};