import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import IVenda from "../Contracts/IVenda";
import { useEffect } from "react";
import IVendaDia from "../Contracts/IDadosGrafico";

function transformData(data: IVenda[]): IVendaDia[] {
  const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});
  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  if (transformedData.length === 0) return null;
  return (
    <ResponsiveContainer height={400} width={"99%"}>
      <LineChart
        data={transformedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
