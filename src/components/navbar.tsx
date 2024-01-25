import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center my-0 mx-auto py-6 max-[930px]:h-16 xl:h-24 fixed top-0 backdrop-blur-md shadow-lg z-10">
      <div className=" w-full flex items-center justify-between mx-4 overflow-hidden sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
        Navbar
        {/* <ul className="flex gap-7 ">
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul> */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Apply Now
          </Button>
          <Button variant="outline" size="sm"></Button>
          <Button variant="outline" size="sm"></Button>
        </div>
      </div>
    </div>
  );
};
