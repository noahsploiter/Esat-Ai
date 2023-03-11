import { Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";


function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex items-center gap-6 pl-[70px]">
        <div className="text-4xl font-bold text-red-500">እሳት AI</div>
        <img src="/fire_1f525.gif" width={100} height={100} />
      </section>

      <section className="flex flex-col gap-3 pl-[40px]">
        <div className="lg:w-2/3  mt-[100px]">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

export default Home;
