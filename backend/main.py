from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

class Item:
    def __init__ (self, id, type, name, stats, price, description):
        self.id = id
        self.type = type
        self.name = name
        self.stats = stats
        self.price = price
        self.description = description

# Rota para exibir a página inicial
@app.route('/')
def index():
    return render_template('template.html', titulo='Items')

# Rota para criar um novo item
@app.route('/criar_item', methods=['POST'])
def criar_item():
    # Obtendo os dados enviados pelo cliente
    data = request.get_json()

    # Verificando se todos os campos necessários foram fornecidos
    if 'nome' not in data or 'tipo' not in data or 'ataque' not in data or 'defesa' not in data:
        return jsonify({'erro': 'Dados incompletos'}), 400

    # Criando o dicionário do item
    novo_item = {
        'id': data['id'],
        'name': data['name'],
        'type': data['type'],
        'stats': data['stats'],
        'defesa': data['defesa']
    }

    # Adicionando o novo item ao arquivo JSON
    with open('itens.json', 'a') as f:
        json.dump(novo_item, f)
        f.write('\n')

    return jsonify({'mensagem': 'Item criado com sucesso'}), 201

if __name__ == '__main__':
    app.run(debug=True)
