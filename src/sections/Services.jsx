import ServiceCard from '@/components/ServiceCard';

export default function Services({ services }) {
  return (
    <section id="services">
      <div id="services-content">
        <div className="service-info">
          <h3>{services.headline}</h3>
          <p>{services.intro}</p>
        </div>

        <div id="service-cards">
          {services.cards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>

        <p className="services-disclaimer">{services.disclaimer}</p>
      </div>
    </section>
  );
}
