pedidos = []
def registrar_lanche(nome):
    pedidos.append([nome, "lanche"])
    return f"Lanche adicionado: {nome}"
def registrar_bebida(nome):
    pedidos.append([nome, "bebida"])
    return f"Bebida adicionada: {nome}"
def registrar_sobremesa(nome):
    pedidos.append([nome, "sobremesa"])
    return f"Sobremesa adicionada: {nome}"
def registrar_pedido (nome,categoria):
    if categoria == "lanche":
        return registrar_lanche(nome)
    elif categoria == "bebida":
        return registrar_bebida(nome)
    elif categoria == "sobremesa":
        return registrar_sobremesa(nome)
    else:
        print ("Categoria inválida!")
categoria = 0
while categoria != 4:
    print ("Você deseja pedir?")
    print ("1- Lanche")
    print ("2- Bebida")
    print ("3- Sobremesa")
    print ("4- Sair")
    categoria = int(input(""))
    match categoria:
        case 1:
            nome = input("Informe o nome do pedido: ")
            mensagem = registrar_pedido(nome)
            print (mensagem)
        case 2:
            nome = input("Informe o nome do pedido: ")
            mensagem = registrar_pedido(nome)
            print (mensagem)
        case 3: 
            nome = input("Informe o nome do pedido: ")
            mensagem = registrar_pedido(nome)
            print (mensagem)
        case 4:
            print ("Saindo do programa...")
        case _: 
            print ("Opção inválida")
    print ("-----------------------------------")
pedidos_ordenados = sorted(pedidos)
for pedidos in pedidos_ordenados:
    print ("=== PEDIDOS ===")
    print (f"{pedidos[0]} - {pedidos[1]}")

        