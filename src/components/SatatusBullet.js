import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0,
  },
  sm: {
    height: 15,
    width: 15,
  },
  md: {
    height: 15,
    width: 15,
  },
  lg: {
    height: 15,
    width: 15,
  },

  Draft: { backgroundColor: '#ffeb3b' },
  Unapproved: { backgroundColor: '#000' },
  Partial: { backgroundColor: '#90caf9' },
  Processing: { backgroundColor: '#2884f0' },
  Rejected: { backgroundColor: '#ff1744' },
  Completed: { backgroundColor: '#40d50a' },

}));

const StatusBullet = props => {
  const { className, size, color, ...rest } = props;

  const classes = useStyles();

  return (
    <span
      {...rest}
      className={clsx(
        {
          [classes.root]: true,
          [classes[size]]: size,
          [classes[color]]: color,
        },
        className,
      )}></span>
  );
};

StatusBullet.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'Draft',
    'Unapproved',
    'Partial',
    'Processing',
    'Rejected',
    'Completed',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

StatusBullet.defaultProps = {
  size: 'md',
  color: 'default',
};

export default StatusBullet;