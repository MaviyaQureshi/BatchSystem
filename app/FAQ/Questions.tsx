const map = [
  {
    main: "flex space-x-8",
    mainkey: 123,
    id0: 0,
    key0: 10,
    key1: 11,
    style:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[45%] xl:w-[40%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
    id1: 1,
    style1: "flex flex-col p-8 w-[45%] xl:w-[40%] rounded-md",
    key2: 12,
    key3: 13,
  },
  {
    main: "flex space-x-8 mt-4",
    mainkey: 234,
    id0: 2,
    key0: 14,
    key1: 15,
    style: "flex flex-col p-8 w-[45%] xl:w-[40%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
    id1: 3,
    key2: 16,
    key3: 17,
    style1:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[45%] xl:w-[40%] rounded-md",
  },
  {
    main: "flex space-x-8 mt-4",
    mainkey: 345,
    id0: 4,
    key0: 18,
    key1: 19,
    style:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[45%] xl:w-[40%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
    id1: 5,
    key2: 20,
    key3: 21,
    style1: "flex flex-col p-8  w-[45%] xl:w-[40%] rounded-md",
  },
];

const Questions = () => {
  return (
    <>
      {map.map((element) => (
        <div className={element.main} key={element.mainkey}>
          <div className={element.style} key={element.id0}>
            <span
              key={element.key0}
              className="font-extrabold tracking-tighter text-lg lg:text-2xl w-[80%] lg:w-[75%]"
            >
              {element.title}
            </span>
            <span className="font-medium text-sm lg:text-lg" key={element.key1}>
              {element.description}
            </span>
          </div>
          <div className={element.style1} key={element.id1}>
            <span
              className="font-extrabold tracking-tighter text-lg lg:text-2xl w-[80%] lg:w-[75%]"
              key={element.key2}
            >
              {element.title}
            </span>
            <span className="font-medium text-sm lg:text-lg" key={element.key3}>
              {element.description}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Questions;
