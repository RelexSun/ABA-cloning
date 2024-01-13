import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="w-screen 3xl:w-[1320px] fixed top-0 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between py-1 mx-4">
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