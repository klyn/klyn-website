import "../assets/styles/components/ContentBlock.css";

let ContentBlock = ({ theme, children }) => (
  <div className={`content-block content-block--${theme || 'light'}`}>
    {children}
  </div>
);

export default ContentBlock;
