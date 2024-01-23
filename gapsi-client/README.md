Gapsi Client (Frontend)

Gapsi Client es una interfaz de usuario desarrollada en React para la gestión de proveedores. Ofrece funcionalidades como listar proveedores, agregar nuevos proveedores y descargar información de proveedores en formato CSV.

Características Principales
Listado de Proveedores: Muestra una tabla paginada de proveedores.
Agregar Proveedor: Permite a los usuarios agregar nuevos proveedores a través de un formulario modal.
Descargar Información de Proveedores: Posibilita la descarga de información detallada de proveedores en formato CSV.
Visualización de Versión y Candidato: Muestra la versión actual de la aplicación y el número del siguiente candidato (proveedor).
Tecnologías Utilizadas
React
Material-UI
Fetch API para llamadas a la API REST
Patrones de Diseño Implementados
Patrón Hook: Utilizado en useGetProveedores y useVersionAndCandidate para encapsular la lógica de fetching de datos y manejo de estado.

Para correr este proyecto localmente, sigue estos pasos:

Clonar el Repositorio:
git clone https://github.com/cosimomorris/gapsi-client.git
cd gapsi-client/gapsi-client
Instalar Dependencias:
npm install
Ejecutar la Aplicación:
npm start
Esto lanzará la aplicación en http://localhost:3001. Vas a encontrar un conflicto por el servicio de backend que correre en el mismo puerto crea un .env a nivel con PORT=3001

Una vez que la aplicación esté en funcionamiento, podrás navegar a través de las diferentes funcionalidades ofrecidas por la interfaz.

Agregar Proveedor: Haz clic en el botón "Agregar Proveedor" y rellena el formulario.
Descargar Datos de Proveedor: Haz clic en el botón "Descargar" en la fila del proveedor deseado.
Navegar entre Páginas: Usa la paginación en la parte inferior de la tabla de proveedores.

Cosimo V
