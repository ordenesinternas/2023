// función filterOrders 

const rows = ordersTable.getElementsByTagName('tr');

for (let i = 0; i < rows.length; i++) {

  // Obtener el TD de descripción
  const descTd = rows[i].getElementsByTagName('td')[1];  

  if (descTd) {
    
    // Obtener texto del TD  
    const text = descTd.textContent || descTd.innerText; 
    
    // Comparar con término de búsqueda
    if (text.toLowerCase().indexOf(searchTerm) > -1) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none'; 
    }

  }

}