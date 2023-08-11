// Obtener referencia a la tabla
const table = document.getElementById('ordersTable');

// Obtener referencia al body de la tabla 
const tableBody = table.getElementsByTagName('tbody')[0];

// Crear input de búsqueda 
const searchInput1 = document.createElement('input');
searchInput1.type = 'text';
searchInput1.placeholder = 'Buscar...';

// Agregar el input antes de la tabla
table.parentNode.insertBefore(searchInput1, table);

// Función para filtrar rows al escribir en el input
searchInput1.addEventListener('keyup', function() {

  // Obtener valor de búsqueda
  const searchTerm = searchInput1.value.toLowerCase();

  // Recorrer rows y filtrar
  for (let i = 0; i < tableBody.rows.length; i++) {
    
    // Obtener el texto de la celda de descripción
    const cellText = tableBody.rows[i].cells[0].textContent.toLowerCase();
    
    // Comparar con término de búsqueda 
    if (cellText.indexOf(searchTerm) > -1) {
      tableBody.rows[i].style.display = '';
    } else {
      tableBody.rows[i].style.display = 'none';
    }

  }
  
});