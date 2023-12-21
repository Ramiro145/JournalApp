import { useEffect } from 'react';
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { JournalPage } from '../journal/pages/JournalPage';
import {JournalRoutes} from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/';


export const AppRouter =()=> {
  
    const {status} = useCheckAuth();

    useEffect(() => {
      if(status === 'authenticated'){
        console.log(redirect)
      }
    
    }, [status])
    

    if(status === 'checking'){
      return[
        {
          path:'*',
          element: <CheckingAuth/>,
        },
      ];
    }else{
      {
        if(status === 'authenticated'){
          return[{
            path: "/",
            
            children: JournalRoutes,
          }]
        }else if(status === 'not-authenticated'){
          return[{
            path: "/auth/*",
            children: AuthRoutes,
          }]
        }
      }
    }
    
}