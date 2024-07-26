const dateFormatter = (props: { dateValue: string }) => {
  const date = new Date(props.dateValue);
  const dateDay = date.getUTCDate();
  const dateYear = date.getUTCFullYear();
  const dateMonthName = date.toLocaleString("default", { month: "short" });
  const dateTime = date.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${dateMonthName} ${dateDay}, ${dateYear}, ${dateTime}`;
};

export default dateFormatter;
