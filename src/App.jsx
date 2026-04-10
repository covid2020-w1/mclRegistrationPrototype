import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountType from './pages/AccountType'
import Phone from './pages/Phone'
import PersonalInfo from './pages/PersonalInfo'
import NameAndEmail from './pages/NameAndEmail'
import Redirect from './pages/Redirect'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/nameAndEmail" element={<NameAndEmail />} />
      </Routes>
    </BrowserRouter>
  )
}
