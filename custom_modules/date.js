// exports
exports.getDate = () => {
  // create a data object and format it
  const date = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return date.toLocaleDateString('en-GB', options);
}
