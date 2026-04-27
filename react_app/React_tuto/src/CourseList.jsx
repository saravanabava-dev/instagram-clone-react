import './App.css'
import Course  from './Course'
import useFetch from './useFetch'


function CourseList(){
 const [setcourse,coursesli,error]=useFetch('http://localhost:3000/courses');


function handleDelete(id){
   console.log(id)
    const newcourses=coursesli.filter((course)=>course.id != id)
    setcourse(newcourses)
}

   if(!coursesli){
        return (
        <>
    {!error && <img src='C:\Users\DELL\Desktop\react.tuto\react_app\React_tuto\public\icegif-1263.gif'></img>}
       { error &&<p>{error}</p>}
        </>
        )

    }
    const result=coursesli.map(
        (course)=> 
            <Course
                key={course.id}
                   image={course.image}
                   amt={course.price}
                name={course.name}
                role={course.role}
              
                delete={handleDelete}
                  id={course.id}
             
        />

    )
 
    return(
<>
<div className='bava'>
{result}
</div>
</>
    );
}

export default CourseList