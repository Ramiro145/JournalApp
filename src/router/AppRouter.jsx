import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRouter } from "../journal/routes/JournalRouter";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/components/CheckingAuth";

const router = createBrowserRouter([
  {
    path: 'auth/*',
    element: <AuthRouter/>,
    children: AuthRoutes,
  },
  {
    path:'/*',
    element:<JournalRouter/>,
    children:JournalRoutes,
  },
  {
    path:'*',
    element:<Navigate to={'/'}/>,
  }
])

export const AppRouter = () =>{
  const {status} = useCheckAuth();

  if(status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <RouterProvider router={router}/>
  )
}