import Link from "next/link";
import GeneratedURLTable from "./generated-url-table";
import GeneratedUrlSyncPopUp from "./generated-url-sync-popup";

export default function UserGeneratedURL() {
  return (
    <>
      <div className="animate-changing-colors h-lvh">
        {/* Top Content */}
        <div className="sticky top-0 py-4 px-12 z-20 backdrop-blur-sm">
          <Link href={"../"}>
            <p className="flex items-center gap-1 text-xl before:content-['<-'] before:text-[1rem] font-semibold">{`Back`}</p>
          </Link>
        </div>
        {/*user generated URL content */}
        <div className="px-4 lg:px-16 py-9">
          <h1 className="text-3xl font-bold">Generate Urls</h1>
          <p className="block lg:hidden text-xs text-gray-500 mt-8">
            On mobile scroll right for more information
          </p>
          <div
            style={{ scrollbarColor: "white transparent" }}
            className="overflow-auto scroll pb-32"
          >
            <GeneratedURLTable />
          </div>
        </div>
      </div>
    </>
  );
}
