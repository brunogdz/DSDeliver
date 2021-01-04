# Segurança

## Cors	

Configurando a segurança

como estamos fazendo em REST não salvamos em sessões

### Acessando o teste

Assim que ir no endereço http://localhost:8080/h2-console aqui irá conseguir fazer o teste de conexão

## Product

possui o Serializable para usar como bytes, para não ter problemas por conta de rede

### Entity

Dentro do Produto, os produtos são uma entidade que vai ser gerenciada pelo ORM. E que a classe vai corresponder a uma tabela do BD

## Order

foi feito o status do pedido e como não pode haver repetição do mesmo produto, mas sim a quantidade dele ao invés de ser feito com um array vai ser com o Set, pois o mesmo não deixa haver essas repetições

# Criando os endpoints

## Serviços

### Product Service

A classe vai poder se injetado em outros componentes e fazermos uma lista dos produtos


### DTO - (Data Transfer Objects)

Os dados vão ser passados de uma forma especifica 

### Documentation Spring

docs.spring.io/sptring-data/jpa/docs/current/reference/html/

### GET PRODUCTS

listagem em ordem alfabética

### GET ORDERS

listagem em ordem de pendencia e de tempo do mais antigo até o mais rescente

### POST ORDERS

Temos o OrderDTO dto, o objeto vai conter todos os dados do pedido e todos os produtos do pedido. Criamos um pedido e vamos ver todos os produtos que estão ligados ao pedido, instancio o id e vinculo todos a ele. E salvo ele no banco.

### PUT ORDERS/ID/DELIVERED

Aqui é feita a transicao de pendente para saiu para a entrega

## Validacao dos dados no PostSQL

Feito a criação da tabela no MyAdmin 


## Hospedado na Heroku

heroku login
heroku git:remote -a <nome-do-app>
git remote -v
git subtree push --prefix backend heroku main