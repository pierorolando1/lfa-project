# Máquina Expendedora de Café


[DEMO DEL PROYECTO](http://161.35.239.14:5173/)

Este proyecto consiste en una simulación de una máquina expendedora de café que combina dos componentes principales:

1. **`vending-coffee-automata`**: Implementa un autómata en Python que simula el funcionamiento de la máquina.
2. **`vending-coffee-ui`**: Una interfaz de usuario desarrollada en React para interactuar con el autómata.

## Requisitos

### Dependencias
- [Bun](https://bun.sh/) (para la interfaz de usuario).
- [Python](https://www.python.org/) (para el autómata).

### Otros requisitos
- Git (opcional, para clonar el repositorio).
- Flask (incluido en `requirements.txt`).

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
# Clonar el repositorio desde GitHub (opcional si no tienes el proyecto localmente)
git clone https://github.com/pierorolando1/lfa-project.git
cd maquina-expendedora-cafe
```

### 2. Configurar y ejecutar el autómata

Navega a la carpeta `vending-coffee-automata`:
```bash
cd vending-coffee-automata
```

#### a) Crear y activar el entorno virtual

**En Linux/MacOS**:
```bash
python3 -m venv venv
source venv/bin/activate
```

**En Windows**:
```bash
python -m venv venv
venv\Scripts\activate
```

#### b) Instalar las dependencias
```bash
pip install -r requirements.txt
```

#### c) Ejecutar el servidor Flask
```bash
flask run
```
El servidor estará disponible en `http://127.0.0.1:5000/` por defecto.

### 3. Configurar y ejecutar la interfaz de usuario

Navega a la carpeta `vending-coffee-ui`:
```bash
cd vending-coffee-ui
```

#### a) Instalar las dependencias
```bash
bun i
```

#### b) Ejecutar el servidor de desarrollo
```bash
bun run dev --host
```

La interfaz estará disponible en `http://127.0.0.1:5173/` por defecto.

## Estructura del Proyecto

```
lfa-project/
├── vending-coffee-automata/   # Código del autómata en Python
│   ├── app.py                # Archivo principal del servidor Flask
│   ├── requirements.txt      # Dependencias del autómata
│   └── ...                   # Otros archivos
├── vending-coffee-ui/        # Interfaz en React
│   ├── src/                  # Código fuente de la interfaz
│   ├── package.json          # Configuración del proyecto
│   └── ...                   # Otros archivos
└── README.md                 # Este archivo
```

## Contribuciones
Si deseas contribuir al proyecto, por favor abre un [issue](https://github.com/usuario/maquina-expendedora-cafe/issues) o envía un pull request.

## Licencia
Este proyecto está licenciado bajo los términos de [MIT License](LICENSE).

---

**¡Gracias por utilizar la Máquina Expendedora de Café!**

