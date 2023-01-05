# Form.io Enterprise on Azure App Service

### Edit copy .example.env to .env, then make appropriate edits.
```bash
cp .env.example .env
```

### Run locally
```
docker-compose up -f prod-docker-compose.yml up --build
```

### Was used to test nginx built into nginx.conf
```
docker-compose up -f test.docker-compose.yml up --build
```

### This was could be tossed
```
docker-compose up -f dev.docker-compose.yml up --build
```