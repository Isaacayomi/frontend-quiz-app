import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  fetchQuestions,
  selectedIndex,
  selectSubject,
  selectSubjectIcon,
} from "../features/QuestionSlice";

function StartMenu({ subjects, subjectIcons }) {
  const dispatch = useDispatch();

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
          to="options"
          key={index}
          onClick={() => {
            dispatch(selectSubject(subject));
            dispatch(selectSubjectIcon(subjectIcons[index]));
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
