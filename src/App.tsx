import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import UserMangement from "./pages/UserManagement/UserMangement"
import PetListing from "./pages/PetListing/PetListing"
import Donation from "./pages/Donation/Donation"
import Settings from "./pages/Settings/Settings"
import Notification from "./pages/Notification/Notification"
import ErrorPage from "./pages/404Page/ErrorPage"
import Login from "./auth/Login/Login"

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/user-mangement" element={<UserMangement />}></Route>
        <Route path="/pet-listing" element={<PetListing />}></Route>
        <Route path="/donations" element={<Donation />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
