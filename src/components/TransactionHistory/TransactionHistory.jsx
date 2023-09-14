import css from '../TransactionHistory/transationHistory.module.css'
export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
            </thead>
            {items.map(item => {
             return (
               <tbody>
                 <tr key={item.id}>
                   <td>{item.type}</td>
                   <td>{item.amount}</td>
                   <td>{item.currency}</td>
                 </tr>
               </tbody>
             )
              
          })}
    
      </table>
    )
}


 