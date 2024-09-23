import DateInput from "./DateInput"; // Import the DateInput component
import { useData } from "../Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <DateInput
        label="Início"
        id="inicio"
        name="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        id="final"
        name="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
