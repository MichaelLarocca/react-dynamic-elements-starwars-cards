export const handleNavigation = (navigate, path, setTimeout) => {
    navigate('/');
    setTimeout(() => {
      navigate(path);
    }, 0); // You can adjust the delay if needed
  };