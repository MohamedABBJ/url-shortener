import { getUserGeneratedUrls } from "@/server/db/get-user-generated-url";

export default async function GeneratedURLTable() {
  const userGeneratedUrls = await getUserGeneratedUrls();
  console.log(
    userGeneratedUrls?.map((element) => console.log(element.user_email))
  );
  return (
    <table className="border border-separate w-full">
      <thead>
        <tr>
          <th className="border">Date</th>
          <th className="border">Full Urls</th>
          <th className="border">Short Urls</th>
        </tr>
      </thead>
    </table>
  );
}
