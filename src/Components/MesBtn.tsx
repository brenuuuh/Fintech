import React from "react";
import { useData } from "../Context/DataContext";

const buttonStyle: React.CSSProperties = {
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  padding: "var(--gap) var(--gap-s)",
  textTransform: "capitalize",
};

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function nomeMes(n: number) {
  const d = new Date();
  d.setMonth(d.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(d);
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();
  function setMes(n: number) {
    const d = new Date();
    d.setMonth(d.getMonth() + n);
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={buttonStyle} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
