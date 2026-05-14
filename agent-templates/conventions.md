# Convenciones del Infra Agent FLIT

## Idioma
- Todos los logs, reportes y mensajes deben estar en español
- Formato de fecha: DD/MM/YYYY HH:MM:SS

## Entornos
- DEV: rama develop → despliegue automático
- QA: rama qa → requiere confirmación manual

## Puertos
- DEV: 3001
- QA: 3002

## Rutas en VPS
- DEV: /opt/app/dev
- QA: /opt/app/qa

## Nomenclatura de contenedores
- DEV: app-dev
- QA: app-qa

## Reportes
- Ruta: docs/reports/
- Formato: reporte-{env}-{YYYY-MM-DD}.md
