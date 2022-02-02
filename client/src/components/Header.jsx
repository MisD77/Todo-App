import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return(
      <header style={headerStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
  );
  }

  Header.defaultProps = {
      text: 'MY TO-DO ',
      bgColor: 'rgba(0,0,0,0.4)',
      textColor: '#9d2727',
  }

  Header.propTypes = {
        text: PropTypes.string,
        bgColor: PropTypes.string,
        textColor: PropTypes.string,
  }

export default Header;
