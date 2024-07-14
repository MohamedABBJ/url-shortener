import ShortedURLButtonOptionsProps from "@/interfaces/shorted-url-button-options-props";
import Image from "next/image";

export const ShortedUrlButtonOptions = (
  props: ShortedURLButtonOptionsProps
) => {
  return (
    <div className="flex">
      <Image width={15} src={props.iconSrc} alt="visitIcon" />
      <button className="p-5">{props.name}</button>
    </div>
  );
};
