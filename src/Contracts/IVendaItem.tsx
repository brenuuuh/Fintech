import IVenda from "./IVenda";

interface IVendaItem extends Omit<IVenda, "data"> {}

export default IVendaItem;
