interface EmailMenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
  outerWindowHandler: "hidden" | "block";
  setOuterWindowHanlder: (outerWindowHandler: "hidden" | "block") => void;
}

export default EmailMenuProps;
