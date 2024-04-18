import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import "./ExpenseList.css"

export class ExpenseList extends Component {
	render() {
		return (
			<React.Fragment>
				<ul className='list'>
					{this.props.initialExpenses.map(expense => {
						return (
							<ExpenseItem 
								expense={expense} 
								key={expense.id}
								handleDelete={this.props.handleDelete}
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
}

export default ExpenseList