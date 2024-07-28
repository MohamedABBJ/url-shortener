import ShortedURLButtonOptionsProps from "@/interfaces/shorted-url-button-options-props";
import urlShortenedIDStore from "@/store/url-shortened-id-store";
import Image from "next/image";
import { redirect } from "next/navigation";

export const ShortedUrlButtonOptions = (
  props: ShortedURLButtonOptionsProps
) => {
  const { urlID, setUrlID } = urlShortenedIDStore();

  const shortedButtonOptionsClickHandler = () => {
    if (props.name == "Visit") {
      window.location.href = urlID;
    }
    if (props.name == "Copy") {
      navigator.clipboard.writeText(`${window.location}${urlID}`);
    }
    if (props.name == "Reset") {
      setUrlID("");
    }
  };

  return (
    <button
      onClick={() => shortedButtonOptionsClickHandler()}
      className="flex items-center my-3 p-2 rounded-md border-2 border-gray-600-600 mx-4 hover:bg-gray-100"
    >
      <Image width={12} src={props.iconSrc} alt="visitIcon" />
      <p className="mx-2 text-sm">{props.name}</p>
    </button>
  );
};
