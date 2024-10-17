
import dbConnect from '@/config/db'
dbConnect()
import { studentsModel } from '@/model/students'
import DeleteBtn from './components/deleteBtn/DeleteBtn'
import UpdateBtn from './components/updateBtn/UpdateBtn'
import AddStudent from './components/addStudent/AddStudent'


const fetchData = async()=>{
  
  try {
   
   const data = await studentsModel.find()
   console.log('data ',data);
   
   return data
  } catch (error) {
 console.log('error',error);
 
}
}
export default async function Home() {
const data = await fetchData()
  return (
    <div>
      
    <h1 className='text-4xl font-bold font-serif text-center py-3'>Mongodb Database Practice</h1>
      <AddStudent/>
      <h1 className='text-4xl font-bold font-serif text-center py-3'>Students List </h1>
      {/* <GetStudents/> */}
      <div className="grid grid-cols-auto-fit gap-2 mx-4 pt-10 my-5">

      {
data?.map((item,i)=>{
  return(
    <div key={i} className=" bg-white rounded-xl shadow-xl pl-5 py-10 ">
<h1 className="font-bold text-2xl">#{i + 1}</h1>
   
        <h1>
                <span className="font-bold text-xl">Id: </span>{item._id}
              </h1>
        <h1>
                <span className="font-bold text-xl">Name: </span>{item.name}
              </h1>
              <h1>
                <span className="font-bold text-xl">Email: </span>{item.email}
              </h1>
              <h1>
                <span className="font-bold text-xl">Phone: </span>{item.phone}
              </h1>
        <div className="flex justify-center my-2">

      <UpdateBtn student={item} />
      <DeleteBtn id={item._id}/>
        </div>
    </div>
  )
})
      }</div>
    </div>
  )
}
