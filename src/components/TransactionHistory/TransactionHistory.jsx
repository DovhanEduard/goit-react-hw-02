import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {

    return (
        <table className={css.transactions}>
            <thead className={css.transactionsTitle}>
                <tr>
                    <th className={css.transactionsText}>Type</th>
                    <th className={css.transactionsText}>Amount</th>
                    <th className={css.transactionsText}>Currency</th>
                </tr>
            </thead>
            {items.map(item => {
                const { id, type, amount, currency } = item;
                
                return (
                    <tbody key={id} className={css.transactionsItems}>
                    <tr >
                        <td className={css.transactionsValue}>{type}</td>
                        <td className={css.transactionsValue}>{amount}</td>
                        <td className={css.transactionsValue}>{currency}</td>
                    </tr>
                </tbody>);
            })}
        </table>
    );
}

export default TransactionHistory;