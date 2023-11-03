import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.css'

import { SignIn, SignUp, NotFound, Dashboard } from './pages';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
