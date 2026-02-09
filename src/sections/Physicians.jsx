import physicianImg from '@/assets/jason.jpg';

export default function Physicians({ physicians }) {
  const {
    headlineLeft, headlineRight, physician, credentials,
  } = physicians;

  return (
    <section id="physicians">
      <div id="physicians-content">
        {/* LEFT: About */}
        <div className="physician-half">
          <h3>{headlineLeft}</h3>

          <div className="physician-info">
            <div className="physician-img-container">
              <img src={physicianImg} alt={physician.name} />
            </div>

            <div className="physician-about">
              <h4>{physician.name}</h4>
              <h5>{physician.specialty}</h5>
              <p>{physician.bio}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Credentials */}
        <div className="physician-half credentials-card">
          <h3>{headlineRight}</h3>

          <div className="cred-block">
            <h4>Experience</h4>
            <div className="cred-list">
              {credentials?.experience?.map((item) => (
                <div
                  className="cred-item"
                  key={`${item.title}-${item.org}-${item.dates}`}
                >
                  <div className="cred-top">
                    <span className="cred-title">{item.title}</span>
                    {item.type && <span className="cred-type">{item.type}</span>}
                  </div>
                  <div className="cred-org">{item.org}</div>
                  <div className="cred-meta">
                    {item.dates && <span>{item.dates}</span>}
                    {item.location && (
                    <span>
                      {' '}
                      •
                      {item.location}
                    </span>
                    )}
                    {item.notes && (
                    <span>
                      {' '}
                      •
                      {item.notes}
                    </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cred-block">
            <h4>Education</h4>
            <div className="cred-list">
              {credentials?.education?.map((item) => (
                <div className="cred-item" key={`${item.school}-${item.dates}`}>
                  <div className="cred-top">
                    <span className="cred-title">{item.school}</span>
                  </div>
                  <div className="cred-org">{item.degree}</div>
                  <div className="cred-meta">{item.dates}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
