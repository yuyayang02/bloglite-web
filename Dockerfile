# 使用 Node.js 官方镜像作为基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package.json ./
COPY package-lock.json ./

# 安装依赖
RUN npm install --no-audit --no-fund --progress=verbose

# 复制项目文件
COPY . .

# 构建应用
RUN npm run build

# 使用更小的基础镜像来运行应用
FROM node:18-alpine

WORKDIR /app

# 从构建阶段复制必要的文件
COPY --from=builder /app/build ./build
COPY package.json ./
COPY package-lock.json ./

# 安装生产依赖
RUN npm install --production --no-audit --no-fund --progress=verbose

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "build"]