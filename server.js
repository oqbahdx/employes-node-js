const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/employees')
  .then(() => console.log('Connected to DB!')).catch(err=>console.log('Failed'))
  

  const employeesSchema = mongoose.Schema({
    name:{type:String,},
    age:{type:Number , min:18,max:65,},
    department:[String],
    date:{type:Date,default:Date.now()},
    isApproved:Boolean
  })

  const employee = mongoose.model('Employee',employeesSchema)

 async  function createEmployee(){

    const oqbah = new employee({
        name:'saja ahmed mohammed',
        age:38,
        department:['school',],
        isApproved:true
    })

    const result = await oqbah.save()
    
   console.log(result);

}

// createEmployee()

async function getEmployee(){
    const emp = await employee.find({
      age:{$in:[20,38]}
    })
    console.log(emp);
}

// getEmployee()

async function updateEmployee(id){
   const emp = await employee.findById(id)
   if(!emp){
    return "user not found"
   }

   emp.age = 32
   const result = await emp.save()
   console.log(result);
   console.log(emp.name + " has updated her age successfully" );
}
updateEmployee('63b2eba5955ea0abab65fdb3')

