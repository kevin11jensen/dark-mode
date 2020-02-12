import React, {useState, useEffect} from 'react';

import useLocalStorage from './UseLocalStorage';

const UseDarkMode = (key, initialValues) => {
    
        const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);
    
        useEffect(() => {

            const checkValue = () => {
                if (darkMode === true) {
                    document.querySelector('body').classList.add('dark-mode');
                }
                else {
                   document.querySelector('body').classList.remove('dark-mode');
                }
            }

            return checkValue
            
        }, [darkMode])

        return [darkMode, setDarkMode]
    }

    export default UseDarkMode;
   