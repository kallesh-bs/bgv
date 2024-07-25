const LoaderComp = () => {
  return (
    <div className="flex justify-center" data-testid="loader">
      <div className="fixed z-[1]"></div>
      <div className="spinner"></div>
    </div>
  );
};

export default LoaderComp;
