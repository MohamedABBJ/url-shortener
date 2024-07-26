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
      <div className="px-20 py-4">
        <h1 className="text-3xl font-bold">Generate Urls</h1>
        <GeneratedURLTable />
      </div>
    </div>
  );
}
