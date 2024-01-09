import Sidebar from "@/components/layouts/sidebar";

export default function AdminLayout({ children }) {
  return (
    <>
    <div className=" flex flex-col  mx-2 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 pt-2 lg:my-8 rounded-lg shadow-lg md  md:-mt-4 sm:mt-5 ">
      <section className="py-5 sm:py-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="text-bold text-lg font-semibold lg:text-xl">Admin Dashboard</h1>
        </div>
      </section>

      <hr className=" mx-4" />

      <section className="py-1">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4 gap-4 ">
            <Sidebar />
            <div className="md:w-2/3 lg:w-3/4 px-4 mt-3">
              <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}