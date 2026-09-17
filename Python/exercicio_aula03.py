inventario = []
def processar_arma (item):
    print (f"Arma adicionada ao inventário {item}")
def processar_armadura (item):
    print(f"Armadura adicionada ao invetário {item}")
def processar_item_especial (item):
    print (f"Item especial adicionado ao inventário {item}")
def adicionar_item(item,nome_categoria):
    
    match nome_categoria:
        case 1:
            processar_arma(item)
            inventario.append([item ,"arma"])
        case 2:
            processar_armadura(item)
            inventario.append([item,"armadura"])
        case 3: 
            processar_item_especial(item)
            inventario.append([item,"item especial"])
        case _: 
            print ("Opção inválida")
opcao = 0
while opcao != 2:
    print ("---------------------------------------")
    print ("=== MENU ===")
    print ("1- Adicionar item")
    print ("2- Sair")
    opcao = int (input("Informe a sua escolha: "))
    print ("---------------------------------------")
    match opcao:
        case 1:
            nome_categoria = 0
            item = input ("Informe o nome do item: ")
            while nome_categoria < 1 or nome_categoria > 3:
                print("Categoria: ")
                print ("1- Arma")
                print ("2- Armadura")
                print ("3 Item especial")
                nome_categoria = int(input("Informe a categoria: "))
                adicionar_item(item,nome_categoria)
        case 2:
            print ("Saindo...")
        case _:
            print ("Opção inválida")
inventario_ordenado = sorted(inventario)
print ("")
print ("=== INVENTARIO ===")
for inventario in inventario_ordenado:
    print (f"{inventario[0]} - {inventario[1]}")