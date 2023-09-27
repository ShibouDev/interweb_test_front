import { Home } from "../_components/home";
import { Upload } from "../_components/upload";
import { Images } from "../_lib/api";

export const getData = async () => {
  const data = await Images.getImages();
  if (!data.length) {
    throw new Error("Failed to fetch data");
  }
  return data;
};

const IndexPage = async () => {
  const data = await getData();
  if (!data.length) {
    return <Upload />;
  } else {
    return <Home data={data}/>
  }
};
export default IndexPage;
