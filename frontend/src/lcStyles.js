const lcStyles = {
  backgroundColor: "bg-[#60a5fa]",
  textColor: "text-[#34D399]",

  title:
    "text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-10",
  content: "font-normal text-gray-700 dark:text-gray-400 mt-5",

  alignCenter: "flex content-center flex-wrap",
  alignStart: "flex content-start flex-wrap",
  alignEnd: "flex content-end flex-wrap",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  flexInLine: "inline-flex",

  h2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  h3: "font-poppins font-semibold xs:text-[38px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  p: "font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px]",

  hr: "w-full h-1 mt-1 mb-10 bg-black border-0 dark:bg-gray-700",

  button:
    "transition-transform duration-300 transform hover:scale-110 bg-blue-gradient focus:outline-none rounded-[10px] font-poppins font-medium text-[18px] text-primary  outline-none  hover:bg-violet-600 w-1/2 self-end mt-10",
  button2:
    "transition-transform duration-300 transform hover:scale-110 bg-blue-gradient focus:outline-none rounded-[10px] py-4 px-6 font-poppins font-medium text-[18px] text-primary  outline-none  hover:bg-violet-600 w-1/2 self-center",
  button3:
    "transition-transform duration-300 transform hover:scale-110 bg-blue-gradient focus:outline-none rounded-[10px] py-4 px-4 font-poppins font-medium text-[18px] text-primary outline-none hover:bg-violet-600 w-1/2 self-center",
};

export const lcLayout = {
  card: "",
};

export const cardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg w-full aspect-[5/3]",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

export default lcStyles;
