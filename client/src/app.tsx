import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
const App: React.FC = () => {

    useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                console.log('hahha', user)
            })
        }, [])
        const [email, setemail] = useState('')
        const [password, setpwd] = useState('')
        const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setemail(e.target.value)
        }
            const pwdHandler = (e: ChangeEvent<HTMLInputElement>) => {
                setpwd(e.target.value)
            }
                const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
        const ans = await signInWithEmailAndPassword(auth, email, password)
                    console.log(ans)
    }
                    return (<>
                        <form onSubmit={submitHandler}>
                            <label>email</label>
                            <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='text' value={email} onChange={emailHandler} />
                            <label>password</label>
                            <input type='password' value={password} onChange={pwdHandler} />
                            <input type='submit' value={'submit'} />
                        </form>
                        <button onClick={async () => {
                            const res = await signOut(auth)
                            console.log(res)
                        }}>sign out</button>
                    </>)
}

                    export default App

                    {/* <Router>
            <Routes>
                <Route>

                </Route>
            </Routes>
        </Router> */}