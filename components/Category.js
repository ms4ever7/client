import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import generateBackgroundGradient from '../helpers/generate-background-gradient';

class Category extends React.Component {
  componentDidMount() {
    window.balanceText('blockquote');
  }

  render() {
    const { from, to } = generateBackgroundGradient(this.props);
    const image = this.props.image || {};
    const backgroundImage = `url("${image.large}"), linear-gradient(to bottom right, ${from}, ${to})`;
    const { title, description } = this.props;

    return (
      <div className="category">
        <Parallax
          strength={300}
          className="category-header"
        >
          <Background className="category-header-background-wrapper">
            <div className="category-header-background" style={{ backgroundImage }} />
          </Background>
          <div className="category-header-content-wrapper">
            <div className="category-header-content text-center layout-row layout-wrap layout-align-center-center">
              <h1 className="category-title balance-text">{title}</h1>
              {description && <p className="category-description balance-text flex-100">{description}</p>}
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    original: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    averageColor: PropTypes.arrayOf(PropTypes.number),
  }),
  description: PropTypes.string.isRequired,
};

Category.defaultProps = {
  image: {},
};

export default Category;
