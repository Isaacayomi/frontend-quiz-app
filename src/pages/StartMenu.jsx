import HTML_ICON from "../assets/images/icon-html.svg";
import CSS_ICON from "../assets/images/icon-css.svg";
import JAVASCRIPT_ICON from "../assets/images/icon-js.svg";
import ACCESSIBLITY_ICON from "../assets/images/icon-accessibility.svg";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  fetchQuestions,
  selectedIndex,
  selectSubject,
} from "../features/QuestionSlice";

function StartMenu() {
  const dispatch = useDispatch();

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
    <div className="mx-auto w-full max-w-[35.25rem] lg:mx-0">
      {subjects.map((subject, index) => (
        <Button
          to="questions"
          key={index}
          onClick={() => {
            dispatch(selectSubject(subject));
            dispatch(selectedIndex(index));
            dispatch(fetchQuestions({ subject, subjectIndex: index }));

            // console.log(subjects[index]);
          }}
          bgClass={iconsBg[index]}
          src={subjectIcons[index]}
        >
          {subject}
        </Button>
      ))}
    </div>
  );
}

export default StartMenu;
