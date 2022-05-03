# baixar a imagem do node:versão do docker hub
FROM node:latest

# cria a pasta/diretório para colocar as informações
WORKDIR /usr/app

# copia o arquivo package.json pra dentro do diretório do WORKDIR
COPY package.json ./

# instala as depedências
# usa-se o npm pois nem todas as imagens vêm com o yarn instalado
RUN npm install 

# copia todos os arquivos da raiz para a pasta WORKDIR (diretório raiz)
COPY . .

# expõe a por que está sendo utilizada pelo container
EXPOSE 3333

# roda os comandos para iniciar o programada
# as partes do script precisam estar separadas em um array de strings
CMD ["npm", "run", "dev"]

########
# comandos docker:

# criar o container: docker build -t rentx .
# rodar o container: docker run -p 3333:3333
# parar o container: docker stop <id do container>
# iniciar o container: docker start <id do container>
# remover o container: docker rm <id do container>  (o container precisa estar parado!)

# listar containers ativados: docker ps
# listar container ativados e desativados: docker ps -a

# ver os logs: docker logs
# observar os logs: docker logs <id do container> -f

# acessar 0 container: docker exec -it <id do container> bash
########