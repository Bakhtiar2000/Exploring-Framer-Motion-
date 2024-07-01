const Container = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[1220px] px-5 mx-auto flex justify-between items-center">
      {children}
    </div>
  );
};

export default Container;
