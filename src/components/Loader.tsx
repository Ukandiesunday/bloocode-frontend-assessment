import RiseLoader from "react-spinners/RiseLoader";
type PreloaderProps = {
  loading: boolean;
};
const Loader = ({ loading }: PreloaderProps) => {
  return (
    <div className="flex  justify-center items-center mt-[100px] ">
      <div className="">
        <RiseLoader color={"royalblue"} loading={loading} size={30} />
      </div>
    </div>
  );
};

export default Loader;
