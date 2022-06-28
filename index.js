// Your code here
const createEmployeeRecord = (array) => {
    return {
      firstName: array[0],
      familyName: array[1],
      title:array[2],
      payPerHour:array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  const createEmployeeRecords = (arrays) => {
      
      return arrays.map(array => {
          return createEmployeeRecord(array)
      })
  
      
  }
  
  const createTimeInEvent = (record, dateObj) => {
     
      const fullYear = dateObj;
      const year = dateObj.slice(0,10);
      const hour = dateObj.slice(-4)
     
      const time = {
          type: "TimeIn",
          date: year,
          hour: parseInt(hour)
      }
      record.timeInEvents.push(time)
      return record
     
  }
  
  const createTimeOutEvent = (record, dateObj) => {
    
      const year = dateObj.slice(0,10);
      const hour = dateObj.slice(-4)
     
      const time = {
          type: "TimeOut",
          date: year,
          hour: parseInt(hour)
      }
      record.timeOutEvents.push(time)
      return record
  }
  
  const hoursWorkedOnDate = (record, date) => {
    const timeIn = record.timeInEvents.find(timeInEvent => timeInEvent.date === date);
    const timeOut = record.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date);
    const hoursWorked = (timeOut.hour - timeIn.hour)/100;
    return hoursWorked;
    
  }
  
  const wagesEarnedOnDate = (record, date) => {
    const hoursWorked = hoursWorkedOnDate(record, date);
    return hoursWorked * record.payPerHour;
  }
  
  const allWagesFor = (record) => {
    return record.timeInEvents.reduce(
      (accumulator, timeInEvent) => accumulator + wagesEarnedOnDate(record, timeInEvent.date), 0)
  }
  
  const calculatePayroll = (employeesRecord) => {
    return employeesRecord.reduce(
      (accumulator, employees) => accumulator + allWagesFor(employees), 0)
  } 
  const looseyGoosey = () => {
      return this
  }
  console.log(looseyGoosey())
  
  const noInferringAllowed = () => {
      "use strict"
      return this
  }
  console.log(noInferringAllowed())
    
  const asgardianBrothers =  [
      
          {
              firstName: "Thor",
              familyName: "Odinsson"
          },
          {
              firstName: "Loki",
              familyName: "Laufeysson-Odinsson"
          }
      
  ]
  const intr = (person, line) => {
      return `${person.firstName} ${person.familyName} says: ${line}`
  }