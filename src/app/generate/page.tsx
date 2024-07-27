import GeneratedURLTable from "./generated-url-table";

export default function UserGeneratedURL() {
  return (
    <div>
      {/* Top Content */}
      <div className="p-6">
        <button>
          <p className="flex items-center gap-1 text-xl before:content-['<-'] before:text-[1rem]">{`Back`}</p>
        </button>
      </div>
      {/*user generated URL content */}
      <div className="px-4 lg:px-20 py-4">
        <h1 className="text-3xl font-bold">Generate Urls</h1>
        <p className="block lg:hidden text-xs text-gray-500 mt-8">
          On mobile scroll right for more information
        </p>
        <div className="overflow-auto">
          <GeneratedURLTable />
        </div>
      </div>
    </div>
  );
}
