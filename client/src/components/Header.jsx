import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return(
      <header  data-test="headerComponent" style={headerStyles}>
          <div className="container">
              <h2 data-test = "textHeader">{text}</h2>
          </div>
      </header>
  );
  }

  Header.defaultProps = {
      text: 'MY TODO APP',
  }

  Header.propTypes = {
        text: PropTypes.string
     
  }

export default Header;
