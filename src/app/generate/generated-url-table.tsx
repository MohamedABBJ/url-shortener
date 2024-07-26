import { getUserGeneratedUrls } from "@/server/db/get-user-generated-url";
import GeneratedUrls from "./generated-url";

export default async function GeneratedURLTable() {
  const userGeneratedUrls = await getUserGeneratedUrls();

  return (
    <table className="mt-4 border w-full">
      <thead>
        <tr className="text-gray-500 text-left [&_th]:pl-4 [&_th]:py-4 text-sm bg-gray-100">
          <th className="">Date</th>
          <th className="">Full Urls</th>
          <th className="">Short Urls</th>
        </tr>
      </thead>
      {userGeneratedUrls?.map((element) => (
        <GeneratedUrls key={element.id} generatedUrlData={element} />
      ))}
    </table>
  );
}
