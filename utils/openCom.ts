export default (type: OpenType, params: OpenParams = {}) => {
  const openData: OpenData = {
    type,
    params
  };
  mitt.emit('open', openData);
};
