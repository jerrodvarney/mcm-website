import { iconMap } from '@/content/iconMap';

export default function ServiceCard({ card }) {
  const Icon = iconMap[card.iconKey];

  return (
    <div className="service-card">
      {Icon && <Icon className="service-icon" />}

      <h3>{card.title}</h3>
      <p>{card.info}</p>
    </div>
  );
}
