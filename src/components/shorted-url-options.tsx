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
    <div className="flex">
      <Image width={15} src={props.iconSrc} alt="visitIcon" />
      <button
        className="p-5"
        onClick={() => shortedButtonOptionsClickHandler()}
      >
        {props.name}
      </button>
    </div>
  );
};
