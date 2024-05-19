import {ModeToggle} from "@/components/theme/mode-toggle";
import {SheetMenu} from "@/components/dashboard/sheet-menu";
import {SidebarStrings} from "@/components/dashboard/sidebar";

interface NavbarProps {
  title: string;
  navStrings: SidebarStrings;
}

export function Navbar({title, navStrings}: NavbarProps) {
  return (
      <header
          className="z-10 supports-backdrop-blur:bg-background/60 sticky top-0 w-full shadow dark:shadow-secondary bg-background/95 backdrop-blur">
        <div className="mx-4 sm:mx-8 flex h-14 items-center">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <SheetMenu navStrings={navStrings}/>
            <h1 className="font-bold">{title}</h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <ModeToggle/>
          </div>
          {/*<div className="flex flex-1 items-center space-x-2 justify-end">*/}
          {/*  <ModeToggle/>*/}
          {/*  /!*<UserNav/>*!/*/}
          {/*</div>*/}
        </div>
      </header>
  );
}
