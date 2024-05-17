import './App.css'
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <>
      <NavBar></NavBar>
      <RouterProvider router={router} />
    </>
  )
}

export default App
