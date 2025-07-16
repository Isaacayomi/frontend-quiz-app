import ToggleButton from "../ui/ToggleButton";
import WelcomeHeading from "../ui/WelcomeHeading";

// import HTML_ICON from "../assets/images/icon-html.svg";
import HTML_ICON from "../assets/images/icon-html.svg";
import CSS_ICON from "../assets/images/icon-css.svg";
import JAVASCRIPT_ICON from "../assets/images/icon-js.svg";
import ACCESSIBLITY_ICON from "../assets/images/icon-accessibility.svg";
import Button from "../ui/Button";

function StartMenu() {
  const subjects = ["HTML", "CSS", "JavaScript", "Accessibility"];
  const subjectIcons = [
    HTML_ICON,
    CSS_ICON,
    JAVASCRIPT_ICON,
    ACCESSIBLITY_ICON,
  ];
  const iconsBg = [
    "bg-[#FFF5ED]",
    "bg-[#E0FDEF]",
    "bg-[#EBF0FF]",
    "bg-[#F6E7FF]",
  ];
  return (
    <div className="h-screen flex-shrink-0 lg:flex lg:items-center lg:justify-around">
      <WelcomeHeading />

      <div className="w-full max-w-[35.25rem]">
        {subjects.map((subject, index) => (
          <Button bgClass={iconsBg[index]} src={subjectIcons[index]}>
            {subject}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default StartMenu;
