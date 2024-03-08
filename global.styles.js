const baseStyles = '@import "shared/styles/_base.scss"';
const variablesStyles = '@import "shared/styles/_variables.scss"';
const breakpointsStyles = '@import "shared/styles/_breakpoints.scss"';
const colorsStyles = '@import "shared/styles/_colors.scss"';
const mixinsStyles = '@import "shared/styles/_mixins.scss"';

const styles = [
  baseStyles,
  variablesStyles,
  breakpointsStyles,
  colorsStyles,
  mixinsStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
