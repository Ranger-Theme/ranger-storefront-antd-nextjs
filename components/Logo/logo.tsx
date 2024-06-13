import { useSelector } from "react-redux";

const Logo = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig);

  return (
    <div>
      <p>{storeConfig?.code ?? ""}</p>
    </div>
  );
};

export default Logo;
