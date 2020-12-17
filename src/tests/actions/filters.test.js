import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("Should generate set start date object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate set end date object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test('Should sort by amount',()=>{
     const action = sortByAmount()
     expect(action).toEqual({
          type:'SORT_BY_AMOUNT',
     })
})

test('Should sort by amount',()=>{
     const action = sortByDate()
     expect(action).toEqual({
          type:'SORT_BY_DATE',
     })
})

test('Should set filter with text',()=>{
     const action = setTextFilter('Text here')
     expect(action).toEqual({
          type:"SET_TEXT_FILTER",
          text:'Text here'
     })
})

test('Should set filter without text',()=>{
     const action = setTextFilter()
     expect(action).toEqual({
          type:"SET_TEXT_FILTER",
          text:''
     })
})