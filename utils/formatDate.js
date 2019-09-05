const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  return `${date.toLocaleString('default', { month: 'short' })} ${date.getDay()}`;
};

export default formatDate;
