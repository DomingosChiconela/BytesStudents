import { createContext, useEffect, useState } from "react";
import { Students } from "../data/BdStudentes";


export const StudentListContext = createContext(null)



export function  StudentListContextProvider ({ children }){

    const [studentesList,SetStudentesList]  =  useState([])

   
     useEffect(()=>{
        SetStudentesList(Students)

     },[])
    function addStudent(student){
        SetStudentesList((prevStudent) => [...prevStudent, student]);

    }

    function editStudent(index,student){
        const editstudent = [...studentesList]
        editstudent[index]=student
        SetStudentesList(editstudent)

    }

    function removeStudent(index){
        const removestudent= [...studentesList];

        removestudent.splice(index, 1);
        SetStudentesList(removestudent);
    }



return (

    <StudentListContext.Provider value={{studentesList,addStudent, editStudent,removeStudent} }>
        { children }
    </StudentListContext.Provider>
)




}