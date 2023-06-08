import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import Img from '../../assets/robin.jpg'

export default function UserDropdown() {
  return (
    <Menu>
      <MenuHandler>
        <div className="border-4 border-isPrimary rounded-full">
          <img src={Img} className="rounded-full w-10 h-10 object-contain" alt="avatar" /> 
        </div>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}