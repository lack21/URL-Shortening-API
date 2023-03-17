import brandImage from "../assets/icon-brand-recognition.svg";
import detailedImage from "../assets/icon-detailed-records.svg";
import customizableImage from "../assets/icon-fully-customizable.svg";

function Statistics() {
  return (
    <section className="statistics">
      <h2 className="sub-heading">Advanced Statistics</h2>
      <p className="text">
        Track how your links are performing across the web with
        <br /> our advanced statisrics dashboard.
      </p>

      <div className="statistics-row">
        <div className="statistic">
          <img src={brandImage} alt="icon-brand-recognition" />
          <h3 className="name">Brand Recognition</h3>
          <p className="text">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="statistic">
          <img src={detailedImage} alt="icon-detailed-records" />
          <h3 className="name">Detailed Records</h3>
          <p className="text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="statistic">
          <img src={customizableImage} alt="icon-fully-customizable" />
          <h3 className="name">Fully Customizable</h3>
          <p className="text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
