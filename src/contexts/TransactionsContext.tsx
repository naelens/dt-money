import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    price: number,
    category: string,
    createdAt: string,
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider( {children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function loadTransactions() {
        const response = await fetch("http://localhost:3000/transactions")
        const data = await response.json();
    
        setTransactions(data)
    }
    
    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <TransactionContext.Provider value={ { transactions } }>
            {children}
        </TransactionContext.Provider>
    )
}