const readTime = (min) => {
  switch (min) {
    case 0:
      return 'Less than 1 min read';
    case 1:
      return '1 min read';
    default:
      return `${min} mins read`;
  }
};

export default readTime;
