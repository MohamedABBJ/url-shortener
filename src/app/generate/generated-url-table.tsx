import { getUserGeneratedUrls } from "@/server/db/get-user-generated-url";
import GeneratedUrls from "./generated-url";

export default async function GeneratedURLTable() {
  const userGeneratedUrls = await getUserGeneratedUrls();

  return (
    <table className="border border-separate w-full">
      <thead>
        <tr>
          <th className="border">Date</th>
          <th className="border">Full Urls</th>
          <th className="border">Short Urls</th>
        </tr>
      </thead>
      {userGeneratedUrls?.map((element) => (
        <GeneratedUrls key={element.id} generatedUrlData={element} />
      ))}
    </table>
  );
}
