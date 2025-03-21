import './Header.css';

export default function Header() {
  const wrapLowercaseLetters = (text) => {
    return text.split('').map((char, index) => {
      if (char === char.toLowerCase() && char !== ' ') {
        return <span key={index} className="lowercase">{char}</span>;
      }
      return char;
    });
  };

  return (
    <div className="header-container">
      <h1>
        <a href='#hero'>{wrapLowercaseLetters('Nikola Pavlov')}</a>
      </h1>
      <ul className="links">
        <li><a className="about-link" href="#about">{wrapLowercaseLetters('About')}</a></li>
        <li><a className="projects-link" href="">{wrapLowercaseLetters('Projects')}</a></li>
        <li><a className="skills-link" href="#skills">{wrapLowercaseLetters('Skills')}</a></li>
        <li><a className="contacts-link" href="#contact">{wrapLowercaseLetters('Contacts')}</a></li>
      </ul>
    </div>
  );
}