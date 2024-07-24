import DBDataProps from "@/interfaces/db-data-props";

export default function GeneratedUrls(props: {
  generatedUrlData: DBDataProps;
}) {
  return (
    <tbody>
      <tr>
        <th className="border">{props.generatedUrlData.date_created}</th>
        <th className="border">{props.generatedUrlData.og_url}</th>
        <th className="border">{props.generatedUrlData.shorted_url}</th>
      </tr>
    </tbody>
  );
}
