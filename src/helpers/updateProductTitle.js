export const updateProductTitle = ({ title, color, flavor, volume }) => {
  let newTitle = title;
  if (color) {
    newTitle = newTitle + ' ' + color.toUpperCase();
  }
  if (volume) {
    newTitle = newTitle + ' ' + volume.toUpperCase();
  }
  if (flavor) {
    newTitle = newTitle + ' ' + flavor.toUpperCase();
  }
  return newTitle;
};
