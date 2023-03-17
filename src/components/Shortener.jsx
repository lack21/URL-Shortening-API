import { useState } from "react";

function Shortener() {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);

  const getNewLink = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return alert("Please fill out the input field!");
    }

    const shorterUrl = async () => {
      const result = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const data = await result.json();
      setLinks([...links, [inputValue, data.result.full_short_link]]);

      setInputValue("");
    };

    shorterUrl();
  };

  const saveLink = (e) => {
    e.preventDefault();
    e.target.innerHTML = "Copied!";
    e.target.classList.add("active");
    navigator.clipboard.writeText(links[e.target.getAttribute("data")][1]);
  };

  return (
    <>
      <aside className="shortener">
        <input
          type="text"
          placeholder="Shorten a link here..."
          required
          className="shorten-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" type="button" onClick={getNewLink}>
          Shorten It!
        </button>
      </aside>

      <ul className="list">
        {links.map((item, index) => (
          <li className="list-item" key={index}>
            <h3 className="old-link">{item[0]}</h3>
            <div>
              <a href={item[1]} target="_blank" className="new-link">
                {item[1]}
              </a>
              <button data={index} className="btn" onClick={saveLink}>
                Copy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Shortener;
