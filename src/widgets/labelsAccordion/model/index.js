import { useState } from 'react';

export const useLabelsAccordion = () => {
  const [isActive, setIsActive] = useState(true);
  function handleClick () {
    setIsActive(!isActive);
  }
  const getIconClass = isActive ? 'labels__dropdown-reverse' : '';
  
  return ( {
    isActive,
    handleClick,
    getIconClass
})
}