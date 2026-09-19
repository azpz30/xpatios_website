const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    marginTop: "sm:mt-10 mt-6",

    // Quote forms (CTA.jsx, Business.jsx)
    flexColumn: "flex flex-col",
    formGroup: "flex flex-col w-full max-w-[470px]",
    formLabel: "flex flex-col font-poppins font-medium text-[16px] leading-[24px] text-black",
    formInput: "font-poppins font-normal text-[16px] leading-[24px] text-black bg-white border border-[#d1d5db] rounded-[10px] px-4 py-3 mt-2 w-full outline-none focus:border-customRed",
    button: "font-poppins text-[16px] leading-[24px] cursor-pointer transition-colors",
    formButton: "w-full max-w-[470px] mt-2",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;