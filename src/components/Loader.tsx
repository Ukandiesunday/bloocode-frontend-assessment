import RiseLoader from "react-spinners/RiseLoader";
type PreloaderProps = {
  loading: boolean;
};
const Loader = ({ loading }: PreloaderProps) => {
  return (
    <div className="flex fixed top-0 left-0 right-0 bottom-0  justify-center items-center  ">
      <div className="">
        <RiseLoader color={"royalblue"} loading={loading} size={30} />
      </div>
    </div>
  );
};

export default Loader;
