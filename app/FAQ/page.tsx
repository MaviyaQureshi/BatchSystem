import Title from "./Title";
import Questions from "./Questions";
import Questions2 from "./Questions2";

const FAQ = () => {
  return (
    <>
      <div className="flex flex-col mt-10 md:mt-0 ml-20 md:ml-24 lg:ml-36 xl:ml-56">
        <Title />
        <span className="hidden md:block">
          <Questions />
        </span>
        <span className="block md:hidden">
          <Questions2 />
        </span>
      </div>
    </>
  );
};

export default FAQ;
