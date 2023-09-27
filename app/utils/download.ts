import axios from "axios";
export const download = async (filename: string) => {
  try {
    const blob = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST_IMAGE}/${filename}`,
      {
        responseType: "blob",
      }
    );
    if (!blob) {
      return false;
    }
    const fileURL = window.URL.createObjectURL(blob.data);
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = filename;
    alink.click();
  } catch (error) {
    console.log(error);
  }
};
