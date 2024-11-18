import IgniteLogo from "../../assets/ignite-logo.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={IgniteLogo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
