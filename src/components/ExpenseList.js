import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import "./ExpenseList.css"

const ExpenseList = ({ handleDelete, expenses, handleEdit, clearItems }) => {
	return (
		<React.Fragment>
			<ul className='list'>
				{expenses.map(expense => {
					return (
						<ExpenseItem
							expense={expense}
							key={expense.id}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					)
				})}
			</ul>
			{expenses.length > 0 && (
				<button className='btn' onClick={clearItems}>
					목록 지우기
					<MdDelete />
				</button>
			)}
			
		</React.Fragment>
	)

}

export default ExpenseList