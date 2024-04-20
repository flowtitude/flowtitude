<script>
// Función que se ejecuta cuando el elemento entra en el viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
	// Verificar si el elemento está en el viewport
	if (entry.isIntersecting) {
	  // Añadir nueva clase
	  entry.target.classList.add('animate-on');
	  // Opcional: eliminar el observador si ya no necesitas más cambios
	  observer.unobserve(entry.target);
	} else {
	  // Remover la clase si el elemento sale del viewport (opcional)
	  entry.target.classList.remove('animate-on');
	}
  });
}

// Crear el observador con la función y opciones de configuración
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Usa el viewport como área de intersección
  rootMargin: '0px', // Márgenes respecto al root
  threshold: 0.5 // El callback se ejecutará cuando el 50% del elemento esté visible
});

// Seleccionar el elemento por su clase y añadirlo al observador
document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
</script>