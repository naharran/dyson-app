import { useEffect } from 'react';

const Auth = () => {
    useEffect(() => {
        // Attempt to close the current tab
        window.close();
      }, []);
    
    return (
        <div>
            
        </div>
    );
};

export default Auth;
window.close()