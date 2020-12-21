import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expense',()=>{
     const res = selectExpensesTotal([])
     expect(res).toBe(0)
})

test('should correctly return single expense',()=>{
     const res = selectExpensesTotal([expenses[0]])
     expect(res).toEqual(195)
})

test('should correctly return multiple expenses',()=>{
     const res = selectExpensesTotal(expenses)
     expect(res).toEqual(114195)
})