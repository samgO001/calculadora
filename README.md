#  Calculadora - Lab 9: Git Flow y Desarrollo de Ramas

##  **Descripción del Proyecto**

Este proyecto implementa una calculadora completa siguiendo la metodología Git con desarrollo secuencial y progresivo de funcionalidades. Cada operación matemática se desarrolló en una rama separada y se mezcló progresivamente con la rama `develop`.

---

##  **Objetivos del Lab 9**

| **Funcionalidad** | **Rama Git** | **Estado** |
|-------------------|---------------|------------|
|  Función para sumar dos números | `feature/operacion-suma` |  Completada |
|  Función para restar dos números | `feature/operacion-resta` |  Completada |
|  Función para multiplicar dos números | `feature/operacion-multiplicacion` |  Completada |
|  Función para dividir dos números | `feature/operacion-division` |  Completada |
|  Función para calcular el factorial de un número | `feature/operacion-factorial` |  Completada |
|  Función para calcular el exponente de un número | `feature/operacion-exponente` |  Completada |
|  Función para calcular la raíz cuadrada de un número | `feature/operacion-raiz-cuadrada` |  Completada |

---

##  **Proceso de Desarrollo Paso a Paso**

### **Paso 1: Inicialización del Repositorio Git**

```bash
# Inicializar repositorio Git
git init

# Agregar archivos al staging area
git add .

# Primer commit con la estructura básica
git commit -m "Initial commit: Basic calculator structure"

# Crear y cambiar a la rama develop
git checkout -b develop
```

**Resultado:** Se creó la rama `develop` como base para el desarrollo.

---

### **Paso 2: Implementación de la Función de Resta**

```bash
# Crear rama para la operación de resta
git checkout -b feature/operacion-resta

# Desarrollar funcionalidad de resta + interfaz básica
# - Crear HTML con interfaz de calculadora
# - Implementar función restar()
# - Implementar funciones auxiliares (obtenerNumeros, mostrarResultado)

# Commit de la funcionalidad de resta
git add .
git commit -m "feat: Implementar función de resta y interfaz básica de calculadora"
```

**Archivos modificados:**
- `index.html` - Interfaz completa de calculadora con CSS
- `index.js` - Funciones básicas de la calculadora

**Funcionalidades implementadas:**
-  Función `restar()` - Resta de dos números
-  Función `sumar()` - Suma de dos números  
-  Función `obtenerNumeros()` - Validación de entrada
-  Función `mostrarResultado()` - Visualización de resultados
-  Interfaz HTML con diseño moderno y responsivo

---

### **Paso 3: Mezcla de la Rama de Resta con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de resta
git merge feature/operacion-resta
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene la funcionalidad de resta.

---

### **Paso 4: Implementación de la Función de Multiplicación**

```bash
# Crear rama para la operación de multiplicación
git checkout -b feature/operacion-multiplicacion

# Mejorar la función de multiplicación
# - Agregar validación para números muy grandes
# - Implementar alerta de precisión

# Commit de la mejora en multiplicación
git add .
git commit -m "feat: Mejorar función de multiplicación con validación de números grandes"
```

**Mejoras implementadas:**
-  Validación para números que exceden `Number.MAX_SAFE_INTEGER`
-  Alerta informativa sobre precisión de resultados grandes

---

### **Paso 5: Mezcla de la Rama de Multiplicación con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de multiplicación
git merge feature/operacion-multiplicacion
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene multiplicación mejorada.

---

### **Paso 6: Implementación de la Función de División**

```bash
# Crear rama para la operación de división
git checkout -b feature/operacion-division

# Mejorar la función de división
# - Mejorar mensaje de error para división por cero
# - Agregar validación para resultados infinitos
# - Implementar formato de resultado inteligente

# Commit de la mejora en división
git add .
git commit -m "feat: Mejorar función de división con validaciones y formato de resultado"
```

**Mejoras implementadas:**
-  Mensaje de error mejorado para división por cero
-  Validación para resultados infinitos o no válidos
-  Formato de resultado con 4 decimales para números no enteros

---

### **Paso 7: Mezcla de la Rama de División con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de división
git merge feature/operacion-division
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene división mejorada.

---

### **Paso 8: Implementación de la Función de Factorial**

```bash
# Crear rama para la operación de factorial
git checkout -b feature/operacion-factorial

# Mejorar la función de factorial
# - Agregar validación para números muy grandes (>170)
# - Implementar formato de resultado con separadores de miles
# - Mejorar mensajes de error

# Commit de la mejora en factorial
git add .
git commit -m "feat: Mejorar función de factorial con validación de límites y formato de resultado"
```

**Mejoras implementadas:**
-  Validación para evitar desbordamiento (límite en 170)
-  Formato de resultado con separadores de miles (español)
-  Mensajes de error más descriptivos

---

### **Paso 9: Mezcla de la Rama de Factorial con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de factorial
git merge feature/operacion-factorial
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene factorial mejorado.

---

### **Paso 10: Implementación de la Función de Exponente**

```bash
# Crear rama para la operación de exponente
git checkout -b feature/operacion-exponente

# Mejorar la función de exponente
# - Agregar validación para exponentes muy grandes (>1000)
# - Implementar formato científico para números muy grandes/pequeños
# - Validación para resultados infinitos

# Commit de la mejora en exponente
git add .
git commit -m "feat: Mejorar función de exponente con validaciones y formato científico"
```

**Mejoras implementadas:**
-  Validación para exponentes muy grandes (límite en 1000)
-  Formato científico para números >1e6 o <1e-6
-  Validación para resultados infinitos o no válidos

---

### **Paso 11: Mezcla de la Rama de Exponente con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de exponente
git merge feature/operacion-exponente
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene exponente mejorado.

---

### **Paso 12: Implementación de la Función de Raíz Cuadrada**

```bash
# Crear rama para la operación de raíz cuadrada
git checkout -b feature/operacion-raiz-cuadrada

# Mejorar la función de raíz cuadrada
# - Agregar validación para números muy grandes (>1e308)
# - Implementar formato científico para números muy pequeños
# - Formato inteligente de resultado

# Commit de la mejora en raíz cuadrada
git add .
git commit -m "feat: Mejorar función de raíz cuadrada con validaciones y formato de resultado"
```

**Mejoras implementadas:**
-  Validación para números muy grandes (límite en 1e308)
-  Formato científico para números <1e-6
-  Formato inteligente: entero, científico o decimal según el caso

---

### **Paso 13: Mezcla Final de la Rama de Raíz Cuadrada con Develop**

```bash
# Cambiar a la rama develop
git checkout develop

# Mezclar la funcionalidad de raíz cuadrada
git merge feature/operacion-raiz-cuadrada
```

**Resultado:** Fast-forward merge exitoso. La rama `develop` ahora contiene **TODAS** las funcionalidades implementadas.

---

##  **Estado Final del Repositorio**

### **Ramas Creadas:**
```
main (rama principal)
└── develop (rama de desarrollo)
    ├── feature/operacion-resta 
    ├── feature/operacion-multiplicacion 
    ├── feature/operacion-division 
    ├── feature/operacion-factorial 
    ├── feature/operacion-exponente 
    └── feature/operacion-raiz-cuadrada 
```

### **Commits Realizados:**
1. `Initial commit: Basic calculator structure`
2. `feat: Implementar función de resta y interfaz básica de calculadora`
3. `feat: Mejorar función de multiplicación con validación de números grandes`
4. `feat: Mejorar función de división con validaciones y formato de resultado`
5. `feat: Mejorar función de factorial con validación de límites y formato de resultado`
6. `feat: Mejorar función de exponente con validaciones y formato científico`
7. `feat: Mejorar función de raíz cuadrada con validaciones y formato de resultado`

---

##  **Funcionalidades de la Calculadora**

### **Operaciones Básicas:**
- **Suma:** `num1 + num2` con validación de entrada
- **Resta:** `num1 - num2` con validación de entrada
- **Multiplicación:** `num1 × num2` con validación de números grandes
- **División:** `num1 ÷ num2` con validación de división por cero

### **Operaciones Avanzadas:**
- **Factorial:** `n!` con límite de precisión en 170
- **Exponente:** `base^exponente` con límite de exponente en 1000
- **Raíz Cuadrada:** `√n` con límite de entrada en 1e308

### **Características Técnicas:**
-  **Validaciones robustas** para cada operación
-  **Manejo de errores** con mensajes informativos
-  **Formato de resultados** inteligente (entero, decimal, científico)
-  **Interfaz responsiva** con diseño moderno
-  **Validaciones de límites** para evitar desbordamientos

---

##  **Interfaz de Usuario**

### **Características del HTML:**
- **Diseño moderno** con gradientes y sombras
- **Interfaz responsiva** que se adapta a diferentes pantallas
- **Botones intuitivos** con emojis descriptivos
- **Campos de entrada** con validación visual
- **Área de resultados** con formato claro

### **Estilos CSS:**
- **Gradiente de fondo** azul a púrpura
- **Tarjeta principal** con sombra y bordes redondeados
- **Botones interactivos** con efectos hover
- **Tipografía clara** y legible
- **Espaciado consistente** entre elementos

---

##  **Tecnologías Utilizadas**

- **HTML5** - Estructura semántica de la calculadora
- **CSS3** - Estilos modernos y responsivos
- **JavaScript ES6+** - Funcionalidades y validaciones
- **Git** - Control de versiones con Git Flow
- **Node.js** - Entorno de desarrollo (package.json)

---

##  **Estructura del Proyecto**

```
calculadora/
├── index.html                 # Interfaz principal de la calculadora
├── index.js                   # Funciones JavaScript de la calculadora
├── package.json               # Configuración del proyecto Node.js
└── README.md                  # Documentación completa del proyecto
```

---

##  **Metodología Git Flow Implementada**

### **Principios Aplicados:**
1. **Rama develop** como base de desarrollo
2. **Ramas de características** con nomenclatura `feature/<nombre>`
3. **Desarrollo secuencial** y progresivo
4. **Mezcla progresiva** con develop después de cada funcionalidad
5. **Commits descriptivos** siguiendo convenciones de Git

### **Flujo de Trabajo:**
```
develop ← feature/resta ← feature/multiplicacion ← feature/division
   ↑           ↑                    ↑                    ↑
   └───────────┴────────────────────┴────────────────────┘
        Mezcla progresiva de funcionalidades
```

---

##  **Pruebas y Validaciones**

### **Casos de Prueba Implementados:**

#### **Operaciones Básicas:**
-  Suma de números positivos y negativos
-  Resta con resultado positivo y negativo
-  Multiplicación con números grandes
-  División con validación de cero

#### **Operaciones Avanzadas:**
-  Factorial de números del 0 al 170
-  Exponente con base y exponente variados
-  Raíz cuadrada de números positivos

#### **Validaciones de Error:**
-  Entrada de texto en campos numéricos
-  División por cero
-  Factorial de números negativos
-  Raíz cuadrada de números negativos
-  Números muy grandes que exceden límites

---

##  **Cómo Usar la Calculadora**

### **Instrucciones de Uso:**
1. **Abrir** el archivo `index.html` en cualquier navegador web
2. **Ingresar** dos números en los campos de entrada
3. **Seleccionar** la operación deseada haciendo clic en el botón correspondiente
4. **Ver** el resultado en el área de resultados
5. **Continuar** con más operaciones o limpiar para empezar de nuevo

### **Operaciones Disponibles:**
- **Suma:** Ingresa dos números y haz clic en 
- **Resta:** Ingresa dos números y haz clic en 
- **Multiplicación:** Ingresa dos números y haz clic en 
- **División:** Ingresa dos números y haz clic en 
- **Factorial:** Ingresa un número en el primer campo y haz clic en 
- **Exponente:** Ingresa base y exponente, haz clic en 
- **Raíz Cuadrada:** Ingresa un número en el primer campo y haz clic en 

---

##  **Solución de Problemas**

### **Problemas Comunes:**

#### **La calculadora no responde:**
- Verifica que JavaScript esté habilitado en tu navegador
- Recarga la página (F5)

#### **Resultados incorrectos:**
- Asegúrate de ingresar solo números válidos
- Verifica que no estés dividiendo por cero
- Para factorial, usa solo números enteros no negativos

#### **Errores de validación:**
- Los campos deben contener solo números
- Algunas operaciones tienen límites de precisión
- Lee los mensajes de error para entender las restricciones

---

##  **Notas del Desarrollador**

### **Decisiones de Diseño:**
- **Interfaz intuitiva** con emojis para mejor UX
- **Validaciones en tiempo real** para prevenir errores
- **Mensajes de error claros** para guiar al usuario
- **Formato de resultados inteligente** según el tipo de número

### **Consideraciones Técnicas:**
- **Límites de precisión** implementados para evitar desbordamientos
- **Validaciones robustas** para cada tipo de operación
- **Manejo de casos edge** como división por cero
- **Formato científico** para números muy grandes o pequeños

---

##  **Futuras Mejoras**

### **Funcionalidades Adicionales:**
- [ ] **Historial de operaciones** con localStorage
- [ ] **Modo científico** con más funciones matemáticas
- [ ] **Tema oscuro/claro** configurable
- [ ] **Calculadora en modo RPN** (Notación Polaca Inversa)
- [ ] **Exportar historial** a CSV o PDF

### **Mejoras Técnicas:**
- [ ] **Tests unitarios** con Jest o Mocha
- [ ] **Linting** con ESLint para calidad de código
- [ ] **Bundling** con Webpack para producción
- [ ] **PWA** (Progressive Web App) capabilities


---

##  **Conclusión del Lab 9**

Este proyecto demuestra exitosamente la implementación de la metodología Git en el desarrollo de software:

-  **funcionalidades** implementadas en ramas separadas
-  **Desarrollo secuencial** y progresivo completado
-  **Mezcla exitosa** de todas las ramas con develop
-  **Código limpio** y bien documentado
-  **Validaciones robustas** para cada operación
-  **Interfaz de usuario** moderna y funcional




