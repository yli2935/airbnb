/*
 * @Description: temp
 */
"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleOpen = useCallback(() => {
    console.log("here")
    setIsOpen((value) => !value);
  }, []);
 
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={()=>{}}
          className="
                hidden
                md:block
                text-sm 
                font-semibold 
                py-3 
                px-4 
                rounded-full 
                hover:bg-neutral-100 
                transition 
                cursor-pointer
                "
        >
          Airbnb your home
        </div>
        
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px] 
                border-neutral-200 
                flex 
                flex-row 
                items-center 
                gap-3 
                rounded-full 
                cursor-pointer 
                hover:shadow-md 
                transition
                "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={""} />
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="
                absolute 
                rounded-xl 
                shadow-md
                w-[40vw]
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
            "
          >
            <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                
              </>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UserMenu;
