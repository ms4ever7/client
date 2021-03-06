import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import generateBackgroundGradient from '../helpers/generate-background-gradient';

const CategoryPreview = (props) => {
  const { from, to } = generateBackgroundGradient(props);

  const style = {};
  const classList = ['category-preview', props.className];
  const image = props.image || {};

  style.backgroundImage = `url("${image.large}"), linear-gradient(to bottom right, ${from}, ${to})`;

  if (props.image) {
    classList.push('category-preview-with-image');
  } else {
    style.background = `linear-gradient(to bottom right, ${from}, ${to})`;
  }

  return (
    <Link href={`/category?path=${props.path}`} as={`/categories/${props.path}`}>
      <a className={classList.join(' ')}>
        <div className="category-preview-inner" style={style}>
          <div className="category-preview-content">
            <div className="category-preview-text layout-row layout-align-start-center layout-wrap">
              <h3 className="category-preview-title">{props.title}</h3>
              <div className="category-preview-description flex-100">{props.description}</div>
            </div>
          </div>
          <div className="category-preview-background-gradient" />
        </div>
      </a>
    </Link>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.shape({
    original: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    averageColor: PropTypes.arrayOf(PropTypes.number),
  }),
  className: PropTypes.string,
};

CategoryPreview.defaultProps = {
  image: {},
  className: '',
};

export default CategoryPreview;
