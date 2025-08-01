# Etapa de construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Configura las variables de entorno si es necesario
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
RUN npm run build

# Etapa de producción
FROM node:18-alpine
WORKDIR /app
# Copia los archivos necesarios del modo standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Copia el package.json para instalar dependencias de producción
COPY --from=builder /app/package*.json ./
RUN npm ci --production
# Expone el puerto (por defecto, Next.js usa el 3000)
EXPOSE 3000
# Inicia la aplicación
CMD ["node", "server.js"]