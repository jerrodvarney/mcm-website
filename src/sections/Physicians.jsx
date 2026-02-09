export default function Physicians({ physicians }) {
  return (
    <section id="physicians">
      <div id="physicians-content">
        <div className="physician-half">
          <h3>{physicians.headlineLeft}</h3>

          <div className="physician-info">
            <div className="physician-img-container">
              <h1>{physicians.placeholderImageText}</h1>
            </div>

            <div className="physician-about">
              <h4>{physicians.physician.name}</h4>
              <h5>{physicians.physician.specialty}</h5>
              <p>{physicians.physician.bio}</p>
            </div>
          </div>
        </div>

        <div className="physician-half">
          <h3>{physicians.headlineRight}</h3>
          <p>{physicians.credentialsPlaceholder}</p>
        </div>
      </div>
    </section>
  );
}
