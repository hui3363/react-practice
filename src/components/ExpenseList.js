import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import "./ExpenseList.css"

const ExpenseList = ({ handleDelete, initialExpenses }) => {
	return (
		<React.Fragment>
			<ul className='list'>
				{initialExpenses.map(expense => {
					return (
						<ExpenseItem
							expense={expense}
							key={expense.id}
							handleDelete={handleDelete}
						/>
					)
				})}
			</ul>
			<button className='btn'>
				목록 지우기
				<MdDelete />
			</button>
		</React.Fragment>
	)

}

export default ExpenseList