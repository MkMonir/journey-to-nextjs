import Menu from "./component/Menu";
import Title from "./component/Title";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <div className="border-primary">
          <Title />
        </div>
        <div className="bg-gray-200">
          <div className="m-auto w-2/3 py-8 px-16 flex gap-5">
            <div className="p-2 w-[25%]">
              <Menu />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
