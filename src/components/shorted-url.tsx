import arrowLinkIcon from "../../public/arrowLink.svg";
import copyURLIcon from "../../public/copyURL.svg";
import resetURLIcon from "../../public/resetURL.svg";

export const ShortedUrl = () => {
  const options = [
    {
      name: "Visit",
      iconSrc: arrowLinkIcon,
      id: 1,
    },
    {
      name: "Copy",
      iconSrc: copyURLIcon,
      id: 2,
    },
    {
      name: "Reset",
      iconSrc: resetURLIcon,
      id: 3,
    },
  ];

  return (
    <>
      <div className="bg-white">
        <input className="bg-gray-200" value={"test"} type="text" disabled />
        <div className="flex justify-center">
          {options.map((element) => (
            <ShortedUrlButtonOptions {...element} key={element.id} />
          ))}
        </div>
      </div>
    </>
  );
};
