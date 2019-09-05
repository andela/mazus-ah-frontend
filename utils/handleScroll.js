const handleScroll = (isFetching, setIsFetching, Testbool) => {
  const { scrollTop, offsetHeight } = document.documentElement;
  if (window.innerHeight + scrollTop !== offsetHeight || isFetching) return;
  setIsFetching(true || Testbool);
};

export default handleScroll;
