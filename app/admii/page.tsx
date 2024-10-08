'use client'

import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase'; 


import '../styles/globals.css'


interface Submission {
  id: string;
  name: string;
  subject: string;
  email: string;
  content: string;
  receivedAt: string;
  
}

const AdminPage = () => {

  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {

    const fetchSubmissions = async () => {
      const querySnapshot = await getDocs(collection(db, 'contactMessages'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),

        receivedAt: new Date().toLocaleString()

      })) as Submission[]; // Cast the data to Submission type
      setSubmissions(data);
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'contactMessages', id));
      // Remove the deleted submission from the state to update the UI
      setSubmissions(prevSubmissions => prevSubmissions.filter(submission => submission.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    
     
  


    <div className={` relative w-full h-[100vh] transition  px-2 md:px-[10rem]   `}>


        <div className='hidden md:flex  w-full  md:h-[100%] border flex-row justiify-between absolute overflow-hidden top-0 left-0 z-20'>
          <div className=' top-0 h-full bg-gray-200 opacity-[0.2]  rounded-b border-r-[2px] border-white   rounded-[40%] ml-[-10rem] w-[20rem]'></div>

          <div className=' top-0 ml-auto h-full bg-gray-200 opacity-[0.2] border-l-[2px] border-white rounded-b  rounded-[40%] mr-[-10rem] w-[20rem]'></div>
        </div>


        <div className='z-40 w-full '>










            <div className='lg:w-[50rem] mb-[4rem] text-left md:text-center w-[95%] mt-[4rem]  mx-auto'>
                <h2 className='font-bold text-[2.5rem] md:text-[2.5rem] text-gradient  transition-2s' >
                    Admin Dashboard
                </h2>
                <p className='text-md  md:text-sm text-blue-600 font-boled mt-0 md:mt-2'>{ `Manage app activities` }</p>
            </div>
            <ul className='flex flex-col md:flex-row flex-wrap w-full justify-between z-40'>
                {submissions.map(submission => (

                <li className='w-full md:w-[30%] p-4 flex flex-col border space-y-4 ' key={submission.id}>
                    <p><strong>Name:</strong> {submission.name}</p>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Subject:</strong> {submission.subject}</p>
                    <p><strong>Message:</strong> {submission.content}</p>
                    <p><strong>Received At:</strong> {submission.receivedAt}</p>

                    <button  className='p-2 text-white cursor-pointer hover:bg-blue-200 bg-blue-700' onClick={() => handleDelete(submission.id)}>Delete</button>
                    
                </li>

                ))}
            </ul>
        </div>




    </div> 
  );
};

export default AdminPage;
