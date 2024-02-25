import NavBar from './components/NavBar'
import Home from './components/home/Home'

function App() {
  function onChildWindowClose() {
    console.log("Child window has been closed!");
}

   const openAuth = () => {
    const windowFeatures = "left=500,top=500,width=320,height=320";
    const childWindow = window.open(import.meta.env.VITE_AUTH_URL, "authWindow",   windowFeatures,);
    const checkInterval = setInterval(() => {
      if (childWindow?.closed) {
          clearInterval(checkInterval);
          onChildWindowClose();
      }
  }, 1000);
   }

  return (
    <div className='bg-home flex flex-col h-full'>
  <NavBar onClick={openAuth} />  
  <Home onClick={openAuth}/>    
    </div>

  )
}

export default App
