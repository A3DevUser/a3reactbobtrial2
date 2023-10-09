const getCellStyles = (cellValue) => {
    if (cellValue !== null) {
      return {
        background: '#f0f0f0', // Change this color to your preferred color
        fontWeight: 'bold',
      };
    }
    return {};
  };

  export default getCellStyles