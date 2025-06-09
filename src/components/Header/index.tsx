import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from '../../assets/logo.svg'
import { TransactionsModal } from "../TransactionsModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="logo" />
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <TransactionsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}