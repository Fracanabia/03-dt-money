import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from "./styles"

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
            </td>
            <td>Venda</td>
            <td>3/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHightLight variant="outcome">-R$ 12.000,00</PriceHightLight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
