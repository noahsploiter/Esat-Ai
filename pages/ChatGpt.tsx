import { Chat } from "../components/Chat";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full shadow z-10 flex overflow-scroll justify-center bg-[#636262] h-[50px]">
        <section className="flex space-x-10 items-center ">
          <div className="text-4xl font-bold text-red-500">እሳት AI</div>

          <div>
          <img src="/fire_1f525.gif" width={45} height={45} />
          </div>
        </section>
      </div>

      <div className=" flex-1 overflow-auto">
        <div className="">
        <div className="flex flex-col gap-3 pl-[40px]">
          <div className="mr-6 lg:w-2/3  mt-[100px]">
            <Chat />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
