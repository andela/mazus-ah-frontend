const thumbnailFetcher = (articleBlock) => {
  const result = articleBlock.find(({ type }) => type === 'image');
  if (!result) {
    return 'https://res.cloudinary.com/mazus/image/upload/v1568139886/content-writing_lgx2t3.svg';
  }
  return result.data.file.url;
};
export default thumbnailFetcher;
