import { useState } from 'react';

export const useLabels = () => {
  const [isActive, setIsActive] = useState(true);
  function handleClick () {
    setIsActive(!isActive);
  }
  function getIconClass () {
    return isActive ? 'labels__dropdown-reverse' : '';
  }
  return ( {
    isActive,
    handleClick,
    getIconClass
})
}