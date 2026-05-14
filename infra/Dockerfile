# ---- Etapa de construcción ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# ---- Etapa de producción ----
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "index.js"]
