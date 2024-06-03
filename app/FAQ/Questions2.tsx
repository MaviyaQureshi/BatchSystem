const map = [
  {
    id: 0,
    main: 123,
    key1: 10,
    key2: 11,
    style:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
  {
    id: 1,
    main: 234,
    key1: 12,
    key2: 13,
    style: "flex flex-col p-8 w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
  {
    id: 2,
    main: 345,
    key1: 14,
    key2: 15,
    style:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
  {
    id: 3,
    main: 456,
    key1: 16,
    key2: 17,
    style: "flex flex-col p-8  w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
  {
    id: 4,
    main: 567,
    key1: 18,
    key2: 19,
    style:
      "flex flex-col p-8 bg-[#FF5555] text-white w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
  {
    id: 5,
    main: 678,
    key1: 20,
    key2: 21,
    style: "flex flex-col p-8  w-[27rem] xs:w-[90%] sm:w-[80%] rounded-md",
    title: "The Best Financial Accounting App Ever!",
    description:
      '"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.In ultrices malesuada elit mauris."',
  },
];

const Questions2 = () => {
  return (
    <>
      {map.map((element) => (
        <div className="flex flex-col" key={element.main}>
          <div className={element.style} key={element.id}>
            <span
              className="font-extrabold tracking-tighter text-lg lg:text-2xl w-[80%] lg:w-[75%]"
              key={element.key1}
            >
              {element.title}
            </span>
            <span className="font-medium text-sm lg:text-lg" key={element.key2}>
              {element.description}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Questions2;
